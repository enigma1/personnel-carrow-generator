/* File match-presence.ts
  Compares the info from the eras
*/
import type { SequencerContext } from '>/types';

export const matchPresence = (ctx: SequencerContext) => {
  for (const keeper of ctx.keepers) {
    const codeLower = keeper.code.toLowerCase();
    const nameLower = keeper.name.toLowerCase();

    for (const [era, text] of Object.entries(ctx.logbookTexts)) {
      if (!text) continue;

      const strategy = ctx.eraStrategies?.[era] ?? 'both';
      let found = text.includes(codeLower);

      if (!found && strategy === 'both') {
        found = text.includes(nameLower);
      }

      keeper[era] = found ? '✓' : '';
    }
  }
};
