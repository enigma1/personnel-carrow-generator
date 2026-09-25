/*  File: src/steps/loadCourses.ts
  Loads the courses keepers might attended
*/
import { readFileSync } from 'node:fs';
import { dataLocations } from '>/config';
import type { CourseRecord, SequencerContext } from '>/types';

export const loadCourses = (ctx: SequencerContext) => {
  console.log('Step: loadCourses');
  const buf: Buffer = readFileSync(dataLocations.rawLastTraining);
  const text: string = buf.toString('utf-8');
  ctx.courses = JSON.parse(text).records as CourseRecord[];
};
