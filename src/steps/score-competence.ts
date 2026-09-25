/* File: src/steps/score-competence.ts
  Measure the score of keepers based on certifications for the preconfigured job listings
*/
import { dataLocations } from '>/config';
import { courseOutcomeWeights } from '>/contracts';
import type { CourseRecord, SequencerContext } from '>/types';

type RoleResults = { score: number; met: boolean };

export const scoreCompetence = (ctx: SequencerContext) => {
  console.log('Step: scoreCompetence');
  const roles = dataLocations.jobListings;
  const today = new Date().toISOString().slice(0, 10);

  const coursesByCode = new Map<string, CourseRecord[]>();

  for (const c of ctx.courses) {
    const list = coursesByCode.get(c.keeper_code) ?? [];
    list.push(c);
    coursesByCode.set(c.keeper_code, list);
  }

  ctx.roleScores = ctx.keepers.map((k) => {
    const keeperCourses = coursesByCode.get(k.code) ?? [];
    const roleResults: Record<string, RoleResults> = {};

    for (const role of roles) {
      if (role.requirements.length === 0) {
        // general role — score on total courses
        const total = keeperCourses.reduce(
          (sum, c) => sum + (courseOutcomeWeights[c.outcome] ?? 0),
          0,
        );
        roleResults[role.id] = { score: total, met: true };
        continue;
      }

      let score = 0;
      let allMet = true;

      for (const req of role.requirements) {
        for (const modCode of req.modules_required) {
          const matching = keeperCourses.filter(
            (c) => c.scheme_module === modCode,
          );

          let best: CourseRecord | undefined;
          if (req.must_be_valid) {
            best = matching.find(
              (c) => c.expires_on !== null && c.expires_on >= today,
            );
          } else {
            best = [...matching].sort(
              (a, b) =>
                (courseOutcomeWeights[b.outcome] ?? 0) -
                (courseOutcomeWeights[a.outcome] ?? 0),
            )[0];
          }

          if (!best) {
            allMet = false;
            continue;
          }
          score += courseOutcomeWeights[best.outcome] ?? 0;
        }
      }

      roleResults[role.id] = { score, met: allMet };
    }

    return { code: k.code, name: k.name, roles: roleResults };
  });
};
