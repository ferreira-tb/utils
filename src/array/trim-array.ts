export interface TrimArrayOptions {
  /**
   * Whether to allow empty strings.
   * @default false
   */
  allowEmpty?: boolean;
}

/** Trims each string in the array, removing any empty strings. */
export function trimArray(array: string[], options: TrimArrayOptions = {}): string[] {
  const _array = array.map((it) => it.trim());
  return options.allowEmpty ? _array : _array.filter(Boolean);
}
