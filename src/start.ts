import { sequencer } from './sequencer';
import {
  loadKeepersLogReference,
  dedup,
  writeInitialCsv,
  loadCourses,
  writeCoursesJoin,
  scoreCompetence,
  rankAll,
  assignRoles,
  writeFinalCsv,
} from '>/steps';

const run = sequencer([
  loadKeepersLogReference,
  dedup,
  writeInitialCsv,
  loadCourses,
  writeCoursesJoin,
  scoreCompetence,
  rankAll,
  assignRoles,
  writeFinalCsv,
]);

// Dispatch Sequencer for main scenario
const ctx = run({
  raw: [],
  courses: [],
  keepers: [],
  roles: [],
  roleScores: [],
  duplicates: [],
  ranked: [],
  assignments: [],
});
