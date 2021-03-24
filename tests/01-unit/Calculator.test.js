const Calculator = require('../../exercise_6/index');
let calsum = new Calculator();

describe('Test Add operation', () => {
  test('Empty string should return 0', () => {
    expect(calsum.add('')).toEqual(0);
  });

  test('Just one number to add, gives as result the same one', () => {
    expect(calsum.add('1')).toEqual(1);
  });

  test('Expecting the addittion of two numbers separated with comma', () => {
    expect(calsum.add('1,2')).toEqual(3);
  });

  test('Expecting the addittion of multiple numbers', () => {
    expect(calsum.add('1,2,3,4,5')).toEqual(15);
  });

  test('Expecting the addittion of multiple numbers with possibly line separators', () => {
    expect(calsum.add('1\n2,3\n4 6')).toEqual(16);
  });

  test('Changing delimiters', () => {
    expect(calsum.add('//:\n1:2')).toEqual(3);
  });

  test('Negative numbers should throw an error', () => {
    const num = '-1';
    expect(() => calsum.add(num)).toThrow('Negatives not allowed: ' + num); //Error is also allowed
  });

  test('Numbers bigger than 1000 should be ignored', () => {
    const num = '1001,2';
    expect(calsum.add(num)).toEqual(2); //Error is also allowed
  });
});
