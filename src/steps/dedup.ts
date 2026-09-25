/*  File: src/steps/dedup.ts
  Deduplicate keeper names and codes
*/
import type { SequencerContext, RawRow, DuplicateKeepers } from '>/types';

export const dedup = (ctx: SequencerContext) => {
  console.log('step: dedup');
  const byName = new Map<string, { keeper: RawRow; indices: number[] }>();
  const byCode = new Map<string, { keeper: RawRow; indices: number[] }>();
  const dupes = new Map<string, DuplicateKeepers>();

  for (const row of ctx.raw) {
    // Track by name
    const nameEntry = byName.get(row.name);
    if (nameEntry) {
      nameEntry.indices.push(row.idx);
    } else {
      byName.set(row.name, { keeper: row, indices: [row.idx] });
    }

    // Track by code
    const codeEntry = byCode.get(row.code);
    if (codeEntry) {
      codeEntry.indices.push(row.idx);
    } else {
      byCode.set(row.code, { keeper: row, indices: [row.idx] });
    }

    // Collect duplicate groups (key = name+code combo)
    const key = `${row.name}::${row.code}`;
    const existing = dupes.get(key);
    if (existing) {
      existing.indices.push(row.idx);
    } else if (nameEntry && nameEntry.indices.length > 1) {
      dupes.set(key, {
        code: row.code,
        name: row.name,
        indices: [...nameEntry.indices],
      });
    }
  }

  ctx.keepers = [...byName.values()].map((e) => ({
    code: e.keeper.code,
    name: e.keeper.name,
    era1: '',
    era2: '',
    era3: '',
  }));

  // Only keep groups that actually have >1 index
  ctx.duplicates = [...dupes.values()].filter((d) => d.indices.length > 1);
};
