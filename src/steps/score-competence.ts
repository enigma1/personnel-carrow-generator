// src/steps/rank-all.ts
import type { SequencerContext } from '>/types';

export const rankAll = (ctx: SequencerContext) => {
  const requiredSchemes: string[] = ctx.requiredSchemes ?? [];
  const scored = ctx.scored as number[];
  // Re-weight: modules in required schemes count double
  for (const k of scored) {
    let weightedScore = 0;
    for (const [schemeCode, result] of Object.entries(k.schemes)) {
      const weight = requiredSchemes.includes(schemeCode) ? 2 : 1;
      weightedScore += result.held * weight;
      if (result.complete) weightedScore += 10 * weight;
    }
    k.score = weightedScore;
  }

  ctx.scored.sort((a, b) => b.score - a.score);
  ctx.selected = ctx.scored; // all of them, ranked
};
