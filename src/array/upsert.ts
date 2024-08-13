/** Pushes an item to the array if it doesn't exist, otherwise updates it. */
export function upsert<T>(array: T[], item: T, predicate?: (value: T) => boolean): void {
  const index = array.findIndex(predicate ?? ((it): boolean => it === item));
  if (index === -1) {
    array.push(item);
  } else {
    array[index] = item;
  }
}
