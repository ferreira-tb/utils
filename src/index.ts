import type { MaybeArray, Nullish } from '@tb-dev/utility-types';

/**
 * Check if a value is empty.
 *
 * Arrays and strings are considered empty if they have a length of 0.
 * Map and Sets are considered empty if they have a size of 0.
 *
 * Nullish items are always considered empty.
 */
export function isEmpty(value?: Nullish<string>): boolean;
export function isEmpty<T>(value?: Nullish<T[]>): boolean;
export function isEmpty<K>(value?: Nullish<Set<K>>): boolean;
export function isEmpty<K, V>(value?: Nullish<Map<K, V>>): boolean;
export function isEmpty(value?: unknown): boolean {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  return true;
}

export function toArray<T>(item?: Nullish<MaybeArray<T>>): T[] {
  const array = item ?? [];
  return Array.isArray(array) ? array : [array];
}

/**
 * Add the pixel unit to a value.
 * If the value is a string, it is returned unchanged.
 */
export function toPixel(value: string | number): string {
  if (typeof value === 'string') return value;
  return `${value}px`;
}
