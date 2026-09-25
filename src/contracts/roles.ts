import { Role } from '>/types';
import { certificationCodes } from './certifications';

export const rolesList: Role[] = [
  {
    id: 'hvac',
    title: 'HV Authorised Person (Offshore)',
    vacancies: 6,
    schemes: ['HVAP', 'OSSC'],
    requirements: [
      {
        scheme_code: 'HVAP',
        modules_required: certificationCodes.HVAP,
        min_outcome: 'Pass',
        must_be_valid: true,
      },
      {
        scheme_code: 'OSSC',
        modules_required: certificationCodes.OSSC,
        min_outcome: 'Pass',
        must_be_valid: true,
      },
    ],
    manual_checks: [
      'Offshore medical fitness',
      '2yr switching experience ≥11kV',
    ],
  },
  {
    id: 'offshore-rotational',
    title: 'Offshore Rotational',
    vacancies: 40,
    schemes: ['OSSC', 'WAHS'],
    requirements: [
      {
        scheme_code: 'OSSC',
        modules_required: certificationCodes.OSSC,
        min_outcome: 'Pass',
        must_be_valid: true,
      },
      {
        scheme_code: 'WAHS',
        modules_required: ['WAHS-1'],
        min_outcome: 'Pass',
        must_be_valid: true,
      },
    ],
    manual_checks: [],
  },
  {
    id: 'vhf-ops',
    title: 'Maritime Communications',
    vacancies: 5,
    schemes: ['RCOM'],
    requirements: [
      {
        scheme_code: 'RCOM',
        modules_required: certificationCodes.RCOM,
        min_outcome: 'Pass',
        must_be_valid: false,
      },
    ],
    manual_checks: [],
  },
  {
    id: 'offshore-safety',
    title: 'Offshore Safety',
    vacancies: 1,
    schemes: ['OSSC'],
    requirements: [
      {
        scheme_code: 'OSSC',
        modules_required: certificationCodes.OSSC,
        min_outcome: 'Pass',
        must_be_valid: true,
      },
    ],
    manual_checks: [],
  },
  {
    id: 'small-craft',
    title: 'Small Craft / Marine Ops',
    vacancies: 1,
    schemes: ['SMOC'],
    requirements: [
      {
        scheme_code: 'SMOC',
        modules_required: certificationCodes.SMOC,
        min_outcome: 'Attended',
        must_be_valid: false,
      },
    ],
    manual_checks: [],
  },
  {
    id: 'general',
    title: 'General (autonomous problem-solving)',
    vacancies: 1,
    schemes: [],
    requirements: [],
    manual_checks: ['General competence assessment'],
  },
];
