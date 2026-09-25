/*  File: src/steps/dedup.ts
  Deduplicate keeper names and codes
*/
import type { SequencerContext, RawRow, DuplicateKeepers } from '>/types';

export const dedup = (ctx: SequencerContext) => {
  console.log('Step: dedup');
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
    const codeEntry = byCode.get(row.keeper_code);
    if (codeEntry) {
      codeEntry.indices.push(row.idx);
    } else {
      byCode.set(row.keeper_code, { keeper: row, indices: [row.idx] });
    }

    // Collect duplicate groups (key = name+code combo)
    const key = `${row.name}::${row.keeper_code}`;
    const existing = dupes.get(key);
    if (existing) {
      existing.indices.push(row.idx);
    } else if (nameEntry && nameEntry.indices.length > 1) {
      dupes.set(key, {
        keeper_code: row.keeper_code,
        name: row.name,
        indices: [...nameEntry.indices],
      });
    }
  }

  ctx.keepers = [...byName.values()].map((e) => ({
    keeper_code: e.keeper.keeper_code,
    name: e.keeper.name,
  }));

  // Only keep groups that actually have >1 index
  ctx.duplicates = [...dupes.values()].filter((d) => d.indices.length > 1);
};
