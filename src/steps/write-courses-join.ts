// src/steps/write-courses-join.ts
import { writeFileSync } from 'node:fs';
import { stringify } from 'csv-stringify/sync';
import type { SequencerContext, CourseRecord } from '>/types';

export const writeCoursesJoin = (ctx: SequencerContext) => {
  const coursesByCode = new Map<string, CourseRecord[]>();
  for (const c of ctx.courses as CourseRecord[]) {
    const list = coursesByCode.get(c.keeper_code) ?? [];
    list.push(c);
    coursesByCode.set(c.keeper_code, list);
  }

  const rows: Omit<CourseRecord, 'employee_ref'>[] = [];

  for (const k of ctx.keepers) {
    const records = coursesByCode.get(k.code) ?? [];
    if (records.length === 0) {
      rows.push({
        keeper_code: k.code,
        course_id: '',
        title: '',
        scheme_module: '',
        outcome: '',
        completed_on: '',
        expires_on: '',
      });
    } else {
      for (const c of records) {
        rows.push({
          keeper_code: k.code,
          course_id: c.course_id,
          title: c.title,
          scheme_module: c.scheme_module,
          outcome: c.outcome,
          completed_on: c.completed_on,
          expires_on: c.expires_on ?? '',
        });
      }
    }
  }

  writeFileSync(
    './data/keepers_courses.csv',
    stringify(rows, { header: true }),
  );
  console.log(
    `[writeCoursesJoin] ${rows.length} rows, ${coursesByCode.size} keepers with courses`,
  );
};
