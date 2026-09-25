import { loadEnvFile } from 'node:process';
import { rolesList } from '>/contracts';

loadEnvFile();
export const getEnvKey = (k: string) => process.env[k] ?? './tmp';

const dataRoot = getEnvKey('DATA_PACK_ROOT');
export const dataLocations = {
  dataRoot,
  rawPersonnelReference: `${dataRoot}/raw/personnel/cla_personnel_export.csv`,
  rawLastTraining: `${dataRoot}/raw/training/vendor-c-learnhub-2017-2026.json`,
  rawLogBooks: `${dataRoot}/raw/personnel/logbooks`,
  jobListings: rolesList,
};
