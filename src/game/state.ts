import { ITEMS, STAGES, StageConfig, WasteCategory } from '../data/items';

export type ScreenPhase = 'start' | 'stage-1' | 'stage-2' | 'stage-3' | 'win';

export interface GameState {
  phase: ScreenPhase;
  stageIndex: number; // 0 = stage-1, 1 = stage-2, 2 = stage-3
  collectedIds: string[];
  countsByCategory: Record<WasteCategory, number>;
  wrongClicks: number;
  binFullTransition: boolean;
}

export function createInitialState(startImmediately = false): GameState {
  return {
    phase: startImmediately ? 'stage-1' : 'start',
    stageIndex: 0,
    collectedIds: [],
    countsByCategory: {
      organik: 0,
      anorganik: 0,
      b3: 0,
    },
    wrongClicks: 0,
    binFullTransition: false,
  };
}

export function getActiveStage(state: GameState): StageConfig {
  return STAGES[Math.min(state.stageIndex, STAGES.length - 1)];
}

export function getRemainingItems(state: GameState) {
  const collected = new Set(state.collectedIds);
  return ITEMS.filter((item) => !collected.has(item.itemId));
}

export function getPhaseForStageIndex(index: number): ScreenPhase {
  if (index === 0) return 'stage-1';
  if (index === 1) return 'stage-2';
  if (index === 2) return 'stage-3';
  return 'win';
}
