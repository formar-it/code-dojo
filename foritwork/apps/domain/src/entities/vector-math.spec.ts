import { test, describe, expect } from "vitest";
import { addPoints, multiplyPoint } from "./vector-math.js";

describe("VectorMath", () => {
  test("Add Points", () => {
    const point1 = { x: 1, y: 0 };
    const point2 = { x: 1, y: 0 };

    const result = addPoints(point1, point2);

    expect(result).toEqual({ x: 2, y: 0 });
  });

  test("Multiply points by scale", () => {
    const point = { x: 1, y: 1 };

    const result = multiplyPoint(point, 5);

    expect(result).toEqual({ x: 5, y: 5 });
  });
});
