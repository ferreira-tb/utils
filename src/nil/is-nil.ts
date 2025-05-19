import type { nil } from '../types';

export function isNil(value: unknown): value is nil {
  return value === undefined || value === null;
}
