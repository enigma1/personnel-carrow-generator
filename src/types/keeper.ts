// src/types/keeper.ts
type CurrentGrade =
  | 'Keeper Grade I'
  | 'Keeper Grade II'
  | 'Keeper Grade III'
  | 'Principal Keeper'
  | 'Relief Keeper';
type ContractTypes = 'Permanent' | 'Seasonal' | 'Fixed Term';
type KeeperStatus = 'current' | 'left';
type GradeHistoryEntry = {
  from_year: number;
  grade: string; // check if enum
};

type StationClass = 'shore' | 'island' | 'rock';

type KeeperPosting = {
  station_code: string;
  station: string;
  station_class: StationClass;
  from_year: number;
  to_year: number;
};

type TrainingOutcome = 'completed' | 'attended' | 'failed';
type TrainingRecord = {
  scheme: string;
  module: string;
  module_name: string;
  year: number;
  outcome: TrainingOutcome;
};

export type KeeperFields = {
  keeper_code: string;
  name: string;
  name_ascii: string;
  payroll_ref: string;
  date_of_birth: string;
  date_joined: string;
  date_left: string | null;
  status: KeeperStatus;
  contract_type: ContractTypes;
  current_grade: CurrentGrade;
  grade_history: GradeHistoryEntry[];
  postings: KeeperPosting[];
  training_records: TrainingRecord[];
};

export type KeeperLogEntry = {
  entry_id: string;
  date: string;
  keeper_code: string;
  station_code: string;
  station: string;
  station_class: StationClass;
  source_era: number;
  source_record: string;
  hours: number;
  text: string;
};
