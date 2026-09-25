import type { Role } from '>/types';

export const rolesList: Role[] = [
  {
    id: 'hvac',
    title: 'HV Authorised Person (Offshore)',
    vacancies: 6,
    schemes: ['HVAP', 'OSSC'],
    requirements: [
      {
        scheme_code: 'HVAP',
        modules_required: [],
        min_outcome: 'Pass',
        must_be_valid: true,
      },
      {
        scheme_code: 'OSSC',
        modules_required: [],
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
    schemes: ['OSSC'],
    requirements: [
      {
        scheme_code: 'OSSC',
        modules_required: [
          'sea-survival',
          'fire',
          'first-aid',
          'height-safety',
        ],
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
    schemes: [],
    requirements: [
      // If there's a VHF/DSC scheme in your cert data, map it here.
      // If not, this is a manual check.
    ],
    manual_checks: [
      'VHF procedure',
      'DSC alerting',
      'Distress/urgency/safety traffic conventions',
    ],
  },
  {
    id: 'offshore-safety',
    title: 'Offshore Safety',
    vacancies: 1,
    schemes: ['OSSC'],
    requirements: [
      {
        scheme_code: 'OSSC',
        modules_required: [],
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
    schemes: ['SCMO'],
    requirements: [
      {
        scheme_code: 'SCMO',
        modules_required: [],
        min_outcome: 'Attended',
        must_be_valid: false,
      },
    ],
    manual_checks: [], // "willing to get one" = soft requirement
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
