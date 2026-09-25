/* File load-keepers-logbooks.ts
  Processes the detailed raw log files
*/
import { readFileSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import iconv from 'iconv-lite';
import { dataLocations } from '>/config';
import type { SequencerContext } from '>/types';

export const loadKeepersLogBooks = (ctx: SequencerContext) => {
  for (const era of dataLocations.rawLogBooks) {
    const dir = join(dataLocations.rawLogBooks, era);
    const files = readdirSync(dir).filter(
      (f) => f.endsWith('.txt') || f.endsWith('.csv') || f.endsWith('.dat'),
    );

    let combined = '';
    let isDataBin = false;

    for (const file of files) {
      if (extname(file) === '.dat') isDataBin = true;

      const buf: Buffer = readFileSync(join(dir, file));
      const text: string = iconv
        .decode(buf, 'utf-8')
        .replace(/[^\x20-\x7E\n\r\t]/g, ' ')
        .toLowerCase();
      combined += text;
    }

    ctx.logbookTexts[era] = combined;
    // Store the matching strategy alongside the text
    ctx.eraStrategies = ctx.eraStrategies ?? {};
    ctx.eraStrategies[era] = isDataBin ? 'code' : 'both';
  }
};
