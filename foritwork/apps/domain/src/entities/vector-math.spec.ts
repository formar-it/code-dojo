import { test, describe, expect } from "vitest";
import { Point } from "./vector-math.js";

describe("VectorMath", () => {
  test("Add Points", () => {
    const point1 = new Point(1, 0);
    const point2 = new Point(1, 0);

    const result = point1.add(point2);

    expect(result).toEqual(new Point(2, 0));
  });

  test("Multiply points by scale", () => {
    const point = new Point(1, 1);

    const result = point.multiply(5);

    expect(result).toEqual(new Point(5, 5));
  });

  test("Normalize", () => {
    const north = new Point(0, -5).normalize();
    expect(north).toEqual(new Point(0, -1));
  });

  test("Magnitude", () => {
    expect(new Point(0, 0).magnitude()).toEqual(0);
    expect(new Point(0, 1).magnitude()).toEqual(1);
    expect(new Point(1, 0).magnitude()).toEqual(1);
    expect(new Point(1, 1).magnitude()).toEqual(Math.sqrt(2));
    expect(new Point(-1, -1).magnitude()).toEqual(Math.sqrt(2));
    expect(new Point(3, 4).magnitude()).toEqual(5);
  });

  test("Divide", () => {
    expect(new Point(0, 0).divide(1)).toEqual(new Point(0, 0));
    expect(new Point(10, 10).divide(2)).toEqual(new Point(5, 5));
    expect(() => new Point(1, 1).divide(0)).toThrowError("Division by zero");
  });
});
