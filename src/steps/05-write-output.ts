/* File 05-write-output.ts
  Generates the file of keepers code/name
  Generates a duplicate file alos.
*/
// src/steps/05-write-output.ts
import { writeFileSync, mkdirSync } from 'node:fs';
import { stringify } from 'csv-stringify/sync';
import type { SequencerContext } from '>/types';

export const writeOutput = (ctx: SequencerContext) => {
  console.log('[05] writeOutput');
  mkdirSync('./data', { recursive: true });

  const keepersCsv = stringify(ctx.keepers, { header: true });
  writeFileSync('./data/keepers.csv', keepersCsv);

  const dupesCsv = stringify(ctx.duplicates, { header: true });
  writeFileSync('./data/keepers_duplicates.csv', dupesCsv);
};
