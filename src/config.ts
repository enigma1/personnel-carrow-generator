import { loadEnvFile } from 'node:process';

loadEnvFile();
export const getEnvKey = (k: string) => process.env[k] ?? '';

export const dataLocations = {
  activePersonnel: getEnvKey('ACTIVE_PERSONNEL_FILE'),
  eraLogsPath: getEnvKey('ERA_LOGS_PATH'),
  eraLogs: [
    // getEnvKey('ERA_LOG1'),
    getEnvKey('ERA_LOG2'),
    getEnvKey('ERA_LOG3'),
  ],
};
