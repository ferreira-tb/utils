export function flush(): Promise<void> {
  return new Promise((resolve) => void setTimeout(resolve, 0));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => void setTimeout(resolve, ms));
}
