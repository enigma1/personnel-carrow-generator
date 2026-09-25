import { sequencer } from './sequencer';
import {
  loadKeepersLogReference,
  dedup,
  loadKeepersLogBooks,
  matchPresence,
  writeOutput,
} from '>/steps';

const run = sequencer([
  loadKeepersLogReference,
  dedup,
  loadKeepersLogBooks,
  matchPresence,
  writeOutput,
]);

const ctx = run({
  raw: [],
  keepers: [],
  duplicates: [],
  logbookTexts: {},
});
