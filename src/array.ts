import type { MaybeArray, Nullish } from './types';

/** Pushes an item to the array if it doesn't exist, otherwise updates it. */
export function upsert<T>(array: T[], item: T, predicate: (value: T) => boolean): void {
  const index = array.findIndex(predicate);
  if (index === -1) {
    array.push(item);
  } else {
    array[index] = item;
  }
}

/** Converts the item to an array if it isn't already. */
export function toArray<T>(item?: Nullish<MaybeArray<T>>): T[] {
  const array = item ?? [];
  return Array.isArray(array) ? array : [array];
}

/** Trims each string in the array, removing any empty strings. */
export function trimArray(array: string[]): string[] {
  return array.map((i) => i.trim()).filter(Boolean);
}
