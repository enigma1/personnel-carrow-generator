import { sequencer } from './sequencer';
import {
  loadKeepersLogReference,
  dedup,
  writeInitialCsv,
  loadCourses,
  writeCoursesJoin,
  scoreCompetence,
} from '>/steps';

const run = sequencer([
  loadKeepersLogReference,
  dedup,
  writeInitialCsv,
  loadCourses,
  writeCoursesJoin,
  scoreCompetence,
]);

// Dispatch Sequencer for main scenario
const ctx = run({
  raw: [],
  courses: [],
  keepers: [],
  schemes: [],
  duplicates: [],
  roleScores: [],
  logbookTexts: {},
});
