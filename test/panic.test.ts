import { expect, test } from 'vitest';
import { panic, todo, unimplemented, unreachable } from '../src/panic';

test('panic', () => {
  expect(() => panic()).toThrowError();
});

test('todo', () => {
  expect(() => todo()).toThrowError('TODO');
});

test('unimplemented', () => {
  expect(() => unimplemented()).toThrowError('not implemented');
});

test('unreachable', () => {
  expect(() => unreachable()).toThrowError('unreachable');
});
