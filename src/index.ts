/* eslint-disable perfectionist/sort-exports */
export * from './array';
export * from './function';
export * from './nil';
export * from './option';
export * from './panic';
export * from './promise';
export * from './string';

export type * from './types';

/** Adds the pixel unit to a value if it is a number. */
export function toPixel(value: string | number): string {
  if (typeof value === 'number') return `${value}px`;
  return value;
}
