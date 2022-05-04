import reverseString from './task2.js';

test('"hello" should return olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});