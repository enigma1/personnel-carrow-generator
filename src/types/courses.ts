export type CourseOutcome = 'Pass' | 'Attended' | 'Not Achieved' | '';

export type CourseRecord = {
  id?: string;
  keeper_code: string;
  course_id: string;
  title: string;
  scheme_module: string;
  outcome: CourseOutcome;
  completed_on: string; // ISO date "YYYY-MM-DD"
  expires_on: string | null; // ISO date "YYYY-MM-DD"
  employee_ref?: string;
};
