import type { Nil } from '../types';

export function isNil(value: unknown): value is Nil {
  return value === undefined || value === null;
}

export const isNullish = isNil;
