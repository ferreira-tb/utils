import { float as floatRegex } from './regex';

export { splitWhitespace, toArray, trimArray, upsert } from './array';

export function isNullish(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Add the pixel unit to a value.
 * If the value is a string, it is returned unchanged.
 */
export function toPixel(value: string | number): string {
  if (typeof value === 'number' || (typeof value === 'string' && floatRegex.test(value))) {
    return `${value}px`;
  }

  return value;
}
