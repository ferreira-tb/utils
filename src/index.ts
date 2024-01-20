import type { Nullish } from '@tb-dev/utility-types';

export * from './array';

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
export function isEmpty<T>(value?: Nullish<readonly T[]>): boolean;
export function isEmpty<K>(value?: Nullish<Set<K>>): boolean;
export function isEmpty<K>(value?: Nullish<ReadonlySet<K>>): boolean;
export function isEmpty<K, V>(value?: Nullish<Map<K, V>>): boolean;
export function isEmpty<K, V>(value?: Nullish<ReadonlyMap<K, V>>): boolean;
export function isEmpty(value?: unknown): boolean {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  return true;
}

export function repeat(amount: number, fn: (current: number) => void): void {
  let n = Math.trunc(amount);
  if (n < 1) {
    n = 0;
  } else if (n > Number.MAX_SAFE_INTEGER) {
    n = Number.MAX_SAFE_INTEGER;
  }

  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

/**
 * Add the pixel unit to a value.
 * If the value is a string, it is returned unchanged.
 */
export function toPixel(value: string | number): string {
  if (typeof value === 'string') return value;
  return `${value}px`;
}
