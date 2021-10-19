const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  // Our tests will be added here.
  test("should multiply two positive integers correctly",() => {
      const result = multiply(1,2);
      expect(result).toBe(2);
  });

test("should multiply a positive and a negative integer correctly", () => {
    const result = multiply(1,-2);
    expect(result).toBe(-2);
 });

test("should return a 0 value for any integer being 0",() =>{
    const result = multiply(1,0);
    expect(result).toBe(0);
 });

});