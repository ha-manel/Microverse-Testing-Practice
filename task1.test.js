import stringLength from './task1.js';

test('"hello" length is 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('"" supposed to throw error', () => {
  expect(() => stringLength('')).toThrow();
});