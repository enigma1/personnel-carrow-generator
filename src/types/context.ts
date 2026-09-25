import type { ActiveKeeperAssociations, DuplicateKeepers } from './tables';
import type { CourseRecord } from './courses';

export type RawRow = {
  code: string;
  name: string;
  idx: number;
};

export type SequencerContext = {
  raw: RawRow[];
  courses: CourseRecord[];
  keepers: ActiveKeeperAssociations[];
  duplicates: DuplicateKeepers[];
  logbookTexts: Record<string, string>;
  eraStrategies?: Record<string, 'code' | 'both'>;
  [key: string]: unknown;
};
