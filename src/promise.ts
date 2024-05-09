const scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;

export function flush(): Promise<void> {
  return new Promise((resolve) => void scheduler(resolve, 0));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => void setTimeout(resolve, ms));
}
