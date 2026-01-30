import { sleep } from './sleep';

export function timeout<T>(f: () => Promise<T>, ms: number): Promise<T | null> {
  return Promise.race([f(), sleep(ms).then(() => null)]);
}
