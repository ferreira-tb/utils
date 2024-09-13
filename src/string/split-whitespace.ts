import type { Nullish } from '../types';
import { trimArray, type TrimArrayOptions } from '../array/trim-array';

export type SplitWhitespaceOptions = TrimArrayOptions;

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
export function splitWhitespace(value: Nullish<string | string[]>, options: SplitWhitespaceOptions = {}): string[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    const array = value.map((it) => splitWhitespace(it, options));
    return array.flat(Number.POSITIVE_INFINITY) as string[];
  }

  value = value.trim().split(/\s/);
  return trimArray(value, options);
}
