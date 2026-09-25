/* File load-keepers-log-reference.ts
  Loads the keepers reference file
*/
import { readFileSync } from 'node:fs';
import { parse } from 'csv-parse/sync';
import iconv from 'iconv-lite';
import { dataLocations } from '>/config';
import { SequencerContext, RawRow } from '>/types';

export const loadKeepersLogReference = (ctx: SequencerContext) => {
  console.log('Step: loadKeepersLogReference');
  const buf: Buffer = readFileSync(dataLocations.rawPersonnelReference);
  const text: string = iconv.decode(buf, 'utf-8');

  const rows: string[][] = parse(text, {
    columns: false,
    skip_empty_lines: true,
  });

  const data = rows.slice(1);

  const raw: RawRow[] = data.map((row, i) => ({
    keeper_code: row[0] ?? 'Not Found',
    name: row[1] ?? 'Not Found',
    idx: i,
  }));
  ctx.raw = raw;
};
