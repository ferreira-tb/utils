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

export function toArray<T>(item?: Nullish<MaybeArray<T>>): T[] {
  const array = item ?? [];
  return Array.isArray(array) ? array : [array];
}

export function trimArray(array: string[]): string[] {
  return array.map((i) => i.trim()).filter(Boolean);
}
