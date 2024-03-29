import type { MaybeArray, Nullish } from '@tb-dev/utility-types';

export function upsert<T>(array: T[], item: T, predicate: (item: T) => boolean): void {
  const index = array.findIndex(predicate);
  if (index === -1) {
    array.push(item);
  } else {
    array[index] = item;
  }
}

export function splitWhitespace(value: Nullish<string | string[]>): string[] {
  if (!value) return [];

  if (Array.isArray(value)) {
    const array = value.map((i) => splitWhitespace(i));
    return array.flat(Number.POSITIVE_INFINITY) as string[];
  }

  value = value.trim().split(/\s/);
  return trimArray(value);
}

export function toArray<T>(item?: Nullish<MaybeArray<T>>): T[] {
  const array = item ?? [];
  return Array.isArray(array) ? array : [array];
}

export function trimArray(array: string[]): string[] {
  return array.map((i) => i.trim()).filter(Boolean);
}
