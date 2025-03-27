/** Throws an error with the given message. */
export function panic(...args: any[]): never {
  throw new Error(args.join(' '));
}

export function todo(...args: any[]): never {
  panic(format('not yet implemented', args));
}

export function unimplemented(...args: any[]): never {
  panic(format('not implemented', args));
}

export function unreachable(...args: any[]): never {
  panic(format('unreachable', args));
}

function format(base: string, args: any[]): string {
  let message = base;
  if (args.length > 0) {
    message = `${message}: ${args.join(' ')}`;
  }

  return message;
}
