import { trimArray } from './array';
import type { Nullish } from './types';

/**
 * Splits a string or an array of strings (recursively) by whitespace.
 *
 * @example
 * ```ts
 * splitWhitespace('a b c'); // ['a', 'b', 'c']
 * splitWhitespace(['a b', 'c']); // ['a', 'b', 'c']
 * splitWhitespace(['a ', ['b', ['c d']]]); // ['a', 'b', 'c', 'd']
 * ```
 */
export function splitWhitespace(value: Nullish<string | string[]>): string[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    const array = value.map((i) => splitWhitespace(i));
    return array.flat(Number.POSITIVE_INFINITY) as string[];
  }

  value = value.trim().split(/\s/);
  return trimArray(value);
}
