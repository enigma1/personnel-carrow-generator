/* File: src/types/role.ts
  types for fullfilling roles in the job listings
*/
import type { CourseOutcome } from './courses';

export type RoleScoreEntry = {
  score: number;
  met: boolean;
};

export type RoleRequirement = {
  scheme_code: string; // matches CertificationsScheme.code
  modules_required: string[]; // specific module codes, or [] for "all modules"
  min_outcome: CourseOutcome;
  must_be_valid: boolean; // expires_on > today
};

export type Role = {
  id: string;
  title: string;
  vacancies: number;
  schemes: string[]; // ['HVAP', 'OSSC'] — which schemes this role needs
  requirements: RoleRequirement[];
  // Non-cert requirements that can't be auto-scored
  manual_checks: string[];
};
