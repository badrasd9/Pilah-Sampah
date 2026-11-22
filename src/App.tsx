import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FeedbackMessage, FeedbackToast } from './components/FeedbackToast';
import { GameHud } from './components/GameHud';
import { SchoolYardBackground } from './components/SchoolYardBackground';
import { StartOverlay } from './components/StartOverlay';
import { TrashBin } from './components/TrashBin';
import { TrashItemSprite } from './components/TrashItemSprite';
import { WinOverlay } from './components/WinOverlay';
import { ITEMS } from './data/items';
import { gameAudio } from './game/audio';
import { advanceAfterBinFull, handleItemClick } from './game/engine';
import { createInitialState, GameState, getActiveStage } from './game/state';

export default function App() {
  const [gameState, setGameState] = useState<GameState>(() => createInitialState(false));
  const [flyingItems, setFlyingItems] = useState<Record<string, { dx: number; dy: number }>>({});
  const [wigglingId, setWigglingId] = useState<string | null>(null);
  const [justCollectedBin, setJustCollectedBin] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackMessage | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const binContainerRef = useRef<HTMLDivElement | null>(null);
  const timersRef = useRef<number[]>([]);
  const feedbackSeqRef = useRef(0);

  const canFullscreen =
    typeof document !== 'undefined' && Boolean(document.documentElement.requestFullscreen);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const scheduleTimer = useCallback((fn: () => void, delayMs: number) => {
    const id = window.setTimeout(() => {
      timersRef.current = timersRef.current.filter((t) => t !== id);
      fn();
    }, delayMs);
    timersRef.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      clearAllTimers();
    };
  }, [clearAllTimers]);

  const showToast = useCallback(
    (type: 'correct' | 'wrong', title: string, detail: string, duration = 2600) => {
      feedbackSeqRef.current += 1;
      const seq = feedbackSeqRef.current;
      setFeedback({ id: seq, type, title, detail });
      scheduleTimer(() => {
        setFeedback((prev) => (prev && prev.id === seq ? null : prev));
      }, duration);
    },
    [scheduleTimer]
  );

  const handleStart = useCallback(() => {
    clearAllTimers();
    setFlyingItems({});
    setWigglingId(null);
    setFeedback(null);
    setGameState(createInitialState(true));
  }, [clearAllTimers]);

  const handleRestart = useCallback(() => {
    clearAllTimers();
    setFlyingItems({});
    setWigglingId(null);
    setJustCollectedBin(false);
    setFeedback(null);
    setGameState(createInitialState(true));
  }, [clearAllTimers]);

  const handleToggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      gameAudio.setMuted(next);
      return next;
    });
  }, []);

  const handleToggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement && stageRef.current?.requestFullscreen) {
        await stageRef.current.requestFullscreen();
      } else if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore fullscreen denial inside restricted iframes
    }
  }, []);

  const computeFlyOffset = useCallback((itemXPercent: number, itemYPercent: number) => {
    const stageEl = stageRef.current;
    const binEl = binContainerRef.current;
    if (!stageEl || !binEl) {
      return { dx: 220, dy: 40 };
    }

    const stageRect = stageEl.getBoundingClientRect();
    const binRect = binEl.getBoundingClientRect();

    const itemCenterX = stageRect.left + (itemXPercent / 100) * stageRect.width;
    const itemCenterY = stageRect.top + (itemYPercent / 100) * stageRect.height;

    const binMouthX = binRect.left + binRect.width * 0.5;
    const binMouthY = binRect.top + binRect.height * 0.38;

    return {
      dx: Math.round(binMouthX - itemCenterX),
      dy: Math.round(binMouthY - itemCenterY),
    };
  }, []);

  const onSelectItem = useCallback(
    (itemId: string) => {
      const outcome = handleItemClick(gameState, itemId);
      if (outcome.result === 'ignored' || !outcome.item) return;

      if (outcome.result === 'wrong') {
        gameAudio.playWrong();
        setWigglingId(itemId);
        showToast('wrong', outcome.feedbackTitle, outcome.feedbackDetail, 2800);
        setGameState(outcome.nextState);

        scheduleTimer(() => {
          setWigglingId((current) => (current === itemId ? null : current));
        }, 420);
        return;
      }

      // Correct item clicked
      const offset = computeFlyOffset(outcome.item.x, outcome.item.y);
      setFlyingItems((prev) => ({ ...prev, [itemId]: offset }));
      setGameState(outcome.nextState);
      gameAudio.playCorrect();

      showToast('correct', outcome.feedbackTitle, outcome.feedbackDetail, 2200);

      scheduleTimer(() => {
        setJustCollectedBin(true);
        scheduleTimer(() => setJustCollectedBin(false), 280);
      }, 280);

      scheduleTimer(() => {
        setFlyingItems((prev) => {
          const next = { ...prev };
          delete next[itemId];
          return next;
        });
      }, 450);

      if (outcome.stageComplete) {
        scheduleTimer(() => {
          if (outcome.gameComplete) {
            gameAudio.playWin();
          } else {
            gameAudio.playBinFull();
          }
        }, 380);

        scheduleTimer(() => {
          setGameState((latest) => advanceAfterBinFull(latest));
        }, 1450);
      }
    },
    [computeFlyOffset, gameState, scheduleTimer, showToast]
  );

  const activeStage = getActiveStage(gameState);
  const currentCount = gameState.countsByCategory[activeStage.category];
  const isPlaying =
    gameState.phase === 'stage-1' ||
    gameState.phase === 'stage-2' ||
    gameState.phase === 'stage-3';
  const isWin = gameState.phase === 'win';

  const visibleItems = useMemo(() => {
    const collected = new Set(gameState.collectedIds);
    return ITEMS.filter((item) => !collected.has(item.itemId) || Boolean(flyingItems[item.itemId]));
  }, [gameState.collectedIds, flyingItems]);

  return (
    <main className="min-h-screen w-full bg-[#E9EFE7] flex flex-col items-center justify-center p-0 sm:p-3 md:p-5">
      <div
        ref={stageRef}
        className={`relative w-full max-w-[1200px] overflow-hidden bg-slate-200 shadow-2xl border-slate-900/15 flex flex-col ${
          isFullscreen
            ? 'h-screen max-w-none rounded-none border-0'
            : 'min-h-[520px] h-[min(92dvh,640px)] sm:h-auto sm:min-h-0 sm:aspect-video sm:rounded-2xl sm:border'
        }`}
      >
        {/* Top Game HUD */}
        <GameHud
          phase={gameState.phase}
          activeStage={activeStage}
          currentCount={currentCount}
          isMuted={isMuted}
          isFullscreen={isFullscreen}
          canFullscreen={canFullscreen}
          onToggleMute={handleToggleMute}
          onToggleFullscreen={handleToggleFullscreen}
        />

        {/* Interactive 16:9 Schoolyard Canvas */}
        <div className="relative flex-1 w-full overflow-hidden">
          <SchoolYardBackground isClean={isWin} />

          {/* Feedback Toast */}
          {isPlaying && <FeedbackToast feedback={feedback} />}

          {/* All 21 Trash Items (visible from start to create dirty yard look) */}
          {gameState.phase !== 'win' &&
            visibleItems.map((item) => (
              <TrashItemSprite
                key={item.itemId}
                item={item}
                isWiggling={wigglingId === item.itemId}
                isFlying={Boolean(flyingItems[item.itemId])}
                flyOffset={flyingItems[item.itemId] ?? { dx: 200, dy: 0 }}
                disabled={!isPlaying || gameState.binFullTransition}
                onSelect={onSelectItem}
              />
            ))}

          {/* Active Stage Trash Bin */}
          {isPlaying && (
            <div
              ref={binContainerRef}
              className="absolute right-2 sm:right-5 md:right-7 bottom-2.5 sm:bottom-4 md:bottom-5 z-20"
            >
              <TrashBin
                stage={activeStage}
                count={currentCount}
                isFull={gameState.binFullTransition}
                justCollected={justCollectedBin}
              />
            </div>
          )}

          {/* Start Screen Overlay */}
          {gameState.phase === 'start' && <StartOverlay onStart={handleStart} />}

          {/* Win Screen Overlay */}
          {isWin && (
            <WinOverlay wrongClicks={gameState.wrongClicks} onRestart={handleRestart} />
          )}
        </div>
      </div>
    </main>
  );
}
