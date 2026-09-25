/* File src/steps/write-initial-csv.ts
  Generates the file of keepers code/name
  Generates a duplicate file alos.
*/
import { writeFileSync, mkdirSync } from 'node:fs';
import { stringify } from 'csv-stringify/sync';
import type { SequencerContext } from '>/types';

export const writeInitialCsv = (ctx: SequencerContext) => {
  mkdirSync('./data', { recursive: true });

  const rows = ctx.keepers.map((k) => ({
    code: k.code,
    name: k.name,
    score: '',
  }));

  writeFileSync('./data/keepers.csv', stringify(rows, { header: true }));
  writeFileSync(
    './data/keepers_duplicates.csv',
    stringify(ctx.duplicates, { header: true }),
  );
};
