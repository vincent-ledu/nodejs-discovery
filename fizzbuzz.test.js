const { fizzbuzz } = require("./fizzbuzz");

test('fizzbuzz de 15 ==> fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });

test('fizzbuzz de 3 ==> fizz', () => {
    expect(fizzbuzz(3)).toBe("fizz");
});

test('fizzbuzz de 5 ==> buzz', () => {
    expect(fizzbuzz(5)).toBe("buzz");
});

test('fizzbuzz de 2 ==> 2', () => {
    expect(fizzbuzz(2)).toBe(2);
});