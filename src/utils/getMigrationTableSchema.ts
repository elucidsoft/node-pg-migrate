import { getSchemas } from '.';
import type { RunnerOption } from '../types';

export function getMigrationTableSchema(options: RunnerOption): string {
  return options.migrationsSchema === undefined
    ? getSchemas(options.schema)[0]
    : options.migrationsSchema;
}
