import type { MaybeArray, Nullish } from '@tb-dev/utility-types';

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
