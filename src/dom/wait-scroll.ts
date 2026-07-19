import { waitElement, type WaitElementOptions } from "./wait-element";

export interface WaitScrollOptions extends WaitElementOptions, ScrollIntoViewOptions {
  throwOnTimeout?: boolean;
}

export async function waitScroll(
  selector: string,
  options: WaitScrollOptions = {},
): Promise<void> {
  const {
    timeout,
    parent,
    throwOnTimeout = true,
    ...scrollOptions
  } = options;

  try {
    const element = await waitElement(selector, {
      parent,
      timeout,
    });

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
      ...scrollOptions,
    });
  }
  catch (err) {
    if (throwOnTimeout) throw err;
  }
}
