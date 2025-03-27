/** Flushes pending promises. */
export function flushPromises(): Promise<void> {
  return new Promise((resolve) => void setTimeout(resolve, 0));
}
