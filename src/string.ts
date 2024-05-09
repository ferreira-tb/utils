import { trimArray } from './array';
import type { Nullish } from '@tb-dev/utility-types';

export function splitWhitespace(value: Nullish<string | string[]>): string[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    const array = value.map((i) => splitWhitespace(i));
    return array.flat(Number.POSITIVE_INFINITY) as string[];
  }

  value = value.trim().split(/\s/);
  return trimArray(value);
}
