/*  File: src/steps/rank-all.ts
  Produces a complete list of all keepers and the roles they can better fit in the vacancies available
*/
import { dataLocations } from '>/config';
import type { SequencerContext, RoleScoreEntry } from '>/types';

export const rankAll = (ctx: SequencerContext) => {
  console.log('Step: rankAll');
  const roles = dataLocations.jobListings;

  // For each keeper, find their best role and compute the total rank score
  ctx.ranked = ctx.keepers.map((k) => {
    const entry = ctx.roleScores?.find((r) => r.keeper_code === k.keeper_code);
    const scores: Record<string, RoleScoreEntry> = entry?.roles ?? {};
    const bestRole = Object.entries(scores).sort(
      (a, b) => b[1].score - a[1].score,
    )[0];

    return {
      keeper_code: k.keeper_code,
      name: k.name,
      best_role: bestRole?.[0] ?? '',
      best_score: bestRole?.[1].score ?? 0,
      ...Object.fromEntries(roles.map((r) => [r.id, scores[r.id]?.score ?? 0])),
      met_roles: roles
        .filter((r) => scores[r.id]?.met)
        .map((r) => r.id)
        .join(';'),
    };
  });

  ctx.ranked.sort((a, b) => b.best_score - a.best_score);
};
