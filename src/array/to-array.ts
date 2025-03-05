import type { MaybeArray, Option } from '../types';

/** Converts the item to an array if it isn't already. */
export function toArray<T>(item?: Option<MaybeArray<T>>): T[] {
  const array = item ?? [];
  return Array.isArray(array) ? array : [array];
}
