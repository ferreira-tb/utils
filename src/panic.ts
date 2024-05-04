export function panic(message?: string): never {
  throw new Error(message);
}

export function todo(message = 'not yet implemented'): never {
  panic(message);
}

export function unimplemented(message = 'not implemented'): never {
  panic(message);
}

export function unreachable(message = 'unreachable'): never {
  panic(message);
}
