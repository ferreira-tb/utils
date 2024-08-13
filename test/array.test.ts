import { expect, test } from 'vitest';
import { toArray, trimArray, upsert } from '../src/array';

test('toArray', () => {
  expect(toArray()).toEqual([]);
  expect(toArray(null)).toEqual([]);
  expect(toArray(undefined)).toEqual([]);

  expect(toArray(1)).toEqual([1]);
  expect(toArray([1])).toEqual([1]);
});

test('trimArray', () => {
  expect(trimArray([' a ', ' b', ''])).toEqual(['a', 'b']);
});

test('upsert', () => {
  const array = [1, 2, 3];

  upsert(array, 4);
  expect(array).toEqual([1, 2, 3, 4]);

  upsert(array, 2);
  expect(array).toEqual([1, 2, 3, 4]);

  const array2 = [{ id: 1 }, { id: 2 }];

  upsert(array2, { id: 3 }, (it) => it.id === 3);
  expect(array2).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);

  upsert(array2, { id: 1 }, (it) => it.id === 1);
  expect(array2).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
});
