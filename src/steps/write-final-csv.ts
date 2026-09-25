import { writeFileSync } from 'node:fs';
import { stringify } from 'csv-stringify/sync';

import type { SequencerContext } from '>/types';
export const writeFinalCsv = (ctx: SequencerContext) => {
  console.log('Step: writeFinalCsv');
  const ranked = ctx.ranked.map((k, i) => ({ rank: i + 1, ...k }));

  writeFileSync(
    './data/keepers_ranked.csv',
    stringify(ranked, { header: true }),
  );
  writeFileSync(
    './data/assignments.csv',
    stringify(ctx.assignments, { header: true }),
  );
};
