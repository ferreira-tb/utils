/** Trims each string in the array, removing any empty strings. */
export function trimArray(array: string[]): string[] {
  return array.map((it) => it.trim()).filter(Boolean);
}
