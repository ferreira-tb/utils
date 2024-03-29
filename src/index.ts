import { float as floatRegex } from './regex';

/**
 * Check if a value is empty.
 *
 * Arrays and strings are considered empty if they have a length of 0.
 * Map and Sets are considered empty if they have a size of 0.
 *
 * This function does not check for empty objects.
 * Any other value is considered empty only if it is nullish.
 */
export function isEmpty(value?: unknown): boolean {
  if (isNullish(value)) {
    return true;
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  return false;
}

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
