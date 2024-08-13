import { expect, test } from 'vitest';
import { splitWhitespace } from '../src/string';

test('splitWhitespace', () => {
  expect(splitWhitespace('a b c')).toEqual(['a', 'b', 'c']);
  expect(splitWhitespace(['a b', 'c'])).toEqual(['a', 'b', 'c']);
  expect(splitWhitespace(['a ', ['b', ['c d']]] as any)).toEqual(['a', 'b', 'c', 'd']);
});
