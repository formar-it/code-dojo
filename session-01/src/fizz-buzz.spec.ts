import { describe, test, expect } from "vitest";
import { fizzBuzz } from "./fizz-buzz.js";

describe("FizzBuzz", () => {
  test("Dado un numero no divisible por 5 ni 3, devuelve el mismo numero (en string)", () => {
    const result = fizzBuzz(2);

    expect(result).toBe("2");
  });

  test("Dado un número divisible por 3, devuelve Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  test("Dado un número divisible por 5, devuelve Buzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  test("Dado un número divisible por 3 y 5, devuelve FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });
});
