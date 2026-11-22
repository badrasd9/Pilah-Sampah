import { CATEGORY_NAMES, ITEMS, STAGES, TrashItem } from '../data/items';
import { GameState, getActiveStage, getPhaseForStageIndex } from './state';

export interface ClickOutcome {
  result: 'correct' | 'wrong' | 'ignored';
  stageComplete: boolean;
  gameComplete: boolean;
  item?: TrashItem;
  feedbackTitle: string;
  feedbackDetail: string;
  nextState: GameState;
}

export function handleItemClick(state: GameState, itemId: string): ClickOutcome {
  if (state.phase === 'start' || state.phase === 'win' || state.binFullTransition) {
    return {
      result: 'ignored',
      stageComplete: false,
      gameComplete: false,
      feedbackTitle: '',
      feedbackDetail: '',
      nextState: state,
    };
  }

  const item = ITEMS.find((entry) => entry.itemId === itemId);
  if (!item || state.collectedIds.includes(itemId)) {
    return {
      result: 'ignored',
      stageComplete: false,
      gameComplete: false,
      feedbackTitle: '',
      feedbackDetail: '',
      nextState: state,
    };
  }

  const activeStage = getActiveStage(state);

  if (item.category === activeStage.category) {
    const newCount = state.countsByCategory[activeStage.category] + 1;
    const stageComplete = newCount >= activeStage.target;
    const gameComplete = stageComplete && state.stageIndex >= STAGES.length - 1;

    const nextState: GameState = {
      ...state,
      collectedIds: [...state.collectedIds, itemId],
      countsByCategory: {
        ...state.countsByCategory,
        [activeStage.category]: newCount,
      },
      binFullTransition: stageComplete,
    };

    return {
      result: 'correct',
      stageComplete,
      gameComplete,
      item,
      feedbackTitle: `Benar! ${item.name}`,
      feedbackDetail: stageComplete
        ? `Tong ${activeStage.binLabel} sudah penuh (${newCount}/${activeStage.target})!`
        : item.hint,
      nextState,
    };
  }

  const itemCategoryName = CATEGORY_NAMES[item.category];
  const activeCategoryName = CATEGORY_NAMES[activeStage.category];

  const nextState: GameState = {
    ...state,
    wrongClicks: state.wrongClicks + 1,
  };

  return {
    result: 'wrong',
    stageComplete: false,
    gameComplete: false,
    item,
    feedbackTitle: `Belum tepat! Ini sampah ${itemCategoryName}.`,
    feedbackDetail: `${item.name} masuk ke tong ${itemCategoryName.toUpperCase()}. Sekarang kita kumpulkan sampah ${activeCategoryName} dulu ya.`,
    nextState,
  };
}

export function advanceAfterBinFull(state: GameState): GameState {
  const nextIndex = state.stageIndex + 1;
  if (nextIndex >= STAGES.length) {
    return {
      ...state,
      phase: 'win',
      binFullTransition: false,
    };
  }

  return {
    ...state,
    stageIndex: nextIndex,
    phase: getPhaseForStageIndex(nextIndex),
    binFullTransition: false,
  };
}
