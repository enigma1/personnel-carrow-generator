import type {
  KeeperRank,
  KeeperAssignment,
  ActiveKeeperAssociations,
  DuplicateKeepers,
  KeeperRoleScores,
} from './keeper';
import type { CourseRecord } from './courses';
import type { Role } from './roles';

export type RawRow = {
  keeper_code: string;
  name: string;
  idx: number;
};

export type SequencerContext = {
  raw: RawRow[];
  courses: CourseRecord[];
  roles: Role[];
  roleScores: KeeperRoleScores[];
  keepers: ActiveKeeperAssociations[];
  duplicates: DuplicateKeepers[];
  ranked: KeeperRank[];
  assignments: KeeperAssignment[];
  [key: string]: unknown;
};
