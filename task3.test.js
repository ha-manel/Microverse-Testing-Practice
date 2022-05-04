import Calculator from './task3.js';
const calculator = new Calculator();

describe('addition', () => {
  test('1+1 is equal to 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test('1+2 is equal to 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('1+3 is equal to 4', () => {
    expect(calculator.add(1, 3)).toBe(4);
  });
});

describe('subtraction', () => {
  test('1-1 is equal to 0', () => {
    expect(calculator.sub(1, 1)).toBe(0);
  });

  test('2-1 is equal to 1', () => {
    expect(calculator.sub(2, 1)).toBe(1);
  });

  test('1-3 is equal to -2', () => {
    expect(calculator.sub(1, 3)).toBe(-2);
  });
});

describe('division', () => {
  test('1/1 is equal to 1', () => {
    expect(calculator.div(1, 1)).toBe(1);
  });

  test('4/2 is equal to 2', () => {
    expect(calculator.div(4, 2)).toBe(2);
  });

  test('6/2 is equal to 3', () => {
    expect(calculator.div(6, 2)).toBe(3);
  });
});

describe('multiplication', () => {
  test('1*1 is equal to 1', () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  });

  test('4*2 is equal to 8', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });

  test('6*2 is equal to 12', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });
});