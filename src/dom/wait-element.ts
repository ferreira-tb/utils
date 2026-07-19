import type { Option } from "../types";

export interface WaitElementOptions {
  parent?: Option<Document | Element>;
  timeout?: Option<number>;
}

export async function waitElement<T extends Element = Element>(
  selector: string,
  options: WaitElementOptions = {},
): Promise<T> {
  const parent = options.parent ?? document;
  let element = parent.querySelector<T>(selector);
  if (element) return element;

  const { promise, resolve, reject } = Promise.withResolvers<T>();

  const timeout = setTimeout(onTimeout, options.timeout ?? 5_000);
  const interval = setInterval(onInterval.bind(parent), 20);

  function onInterval(this: Document | Element): void {
    element = this.querySelector<T>(selector);
    if (element) {
      clearInterval(interval);
      clearTimeout(timeout);
      resolve(element);
    }
  }

  function onTimeout(): void {
    clearInterval(interval);
    reject(new Error(`timeout waiting for element: ${selector}`));
  }

  return promise;
}
