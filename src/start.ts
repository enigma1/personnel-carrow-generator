import { sequencer } from './sequencer';
import {
  loadKeepersLogReference,
  dedup,
  writeInitialCsv,
  loadKeepersLogBooks,
  matchPresence,
  loadCourses,
  writeCoursesJoin,
} from '>/steps';

const run = sequencer([
  loadKeepersLogReference,
  dedup,
  writeInitialCsv,
  loadCourses,
  writeCoursesJoin,
  // loadKeepersLogBooks,
  // matchPresence,
]);

const ctx = run({
  raw: [],
  courses: [],
  keepers: [],
  duplicates: [],
  logbookTexts: {},
});
