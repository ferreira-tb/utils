import type { MaybeArray, Nullish } from '../types';

/** Converts the item to an array if it isn't already. */
export function toArray<T>(item?: Nullish<MaybeArray<T>>): T[] {
  const array = item ?? [];
  return Array.isArray(array) ? array : [array];
}
