/* File: src/types/role.ts
  types for fullfilling roles in the job listings
*/
import type { CourseOutcome } from './courses';

export interface RoleRequirement {
  scheme_code: string; // matches CertificationsScheme.code
  modules_required: string[]; // specific module codes, or [] for "all modules"
  min_outcome: CourseOutcome;
  must_be_valid: boolean; // expires_on > today
}

export interface Role {
  id: string;
  title: string;
  vacancies: number;
  requirements: RoleRequirement[];
  // Non-cert requirements that can't be auto-scored
  manual_checks: string[];
}
