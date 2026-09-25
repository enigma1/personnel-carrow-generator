import { ActiveKeeperAssociations, DuplicateKeepers } from './tables';

export type RawRow = {
  code: string;
  name: string;
  idx: number;
};

export type SequencerContext = {
  raw: RawRow[];
  keepers: ActiveKeeperAssociations[];
  duplicates: DuplicateKeepers[];
  logbookTexts: Record<string, string>;
  eraStrategies?: Record<string, 'code' | 'both'>;
  [key: string]: unknown;
};
