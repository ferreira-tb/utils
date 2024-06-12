export function panic(...args: any[]): never {
  throw new Error(args[0]);
}

export function todo(...args: any[]): never {
  const message = typeof args[0] === 'string' ? args[0] : 'todo';
  panic(message);
}

export function unimplemented(...args: any[]): never {
  const message = typeof args[0] === 'string' ? args[0] : 'not implemented';
  panic(message);
}

export function unreachable(...args: any[]): never {
  const message = typeof args[0] === 'string' ? args[0] : 'unreachable';
  panic(message);
}
