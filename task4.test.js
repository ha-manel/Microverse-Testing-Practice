import capitalize from "./task4.js";

test('"hello" should return "Hello"', () => {
  expect(capitalize('hello')).toBe('Hello');
});