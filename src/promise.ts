const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

export function flushPromises(): Promise<void> {
  return new Promise((resolve) => void scheduler(resolve, 0));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => void setTimeout(resolve, ms));
}
