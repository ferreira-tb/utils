import { panic } from '../panic';
import { isNil } from '../nil/is-nil';
import type { Option } from '../types';

export function unwrap<T>(value: Option<T>, message = '`unwrap` called with a nil value'): T {
  return isNil(value) ? panic(message) : value;
}

export function unwrapOr<T>(value: Option<T>, other: T): T {
  return isNil(value) ? other : value;
}

export function unwrapOrElse<T>(value: Option<T>, fn: () => T): T {
  return isNil(value) ? fn() : value;
}
