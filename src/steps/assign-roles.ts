/*  File: src/steps/assign-roles.ts
   Vacancies Assignment fills respecting vacancies
*/
import { dataLocations } from '>/config';
import type { SequencerContext } from '>/types';

export const assignRoles = (ctx: SequencerContext) => {
  console.log('Step: assignAll');
  const remaining: Record<string, number> = {};
  for (const role of dataLocations.jobListings)
    remaining[role.id] = role.vacancies;

  ctx.assignments = [];

  for (const keeper of ctx.ranked) {
    const scores =
      ctx.roleScores.find((r) => r.keeper_code === keeper.keeper_code)?.roles ??
      {};

    const eligible = Object.entries(scores)
      .filter(([id, r]) => r.score > 0 && remaining[id] > 0)
      .sort((a, b) => b[1].score - a[1].score);

    if (eligible.length > 0) {
      const [roleId] = eligible[0];
      ctx.assignments.push({
        keeper_code: keeper.keeper_code,
        name: keeper.name,
        role: roleId,
        score: eligible[0][1].score,
      });
      remaining[roleId]--;
    }
  }
};
