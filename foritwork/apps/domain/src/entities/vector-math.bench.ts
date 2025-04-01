import { describe, bench } from "vitest";
import { Point } from "./vector-math.js";

describe("VectorMath", () => {
  const points = [
    new Point(0, 0),
    new Point(0, 1),
    new Point(1, 0),
    new Point(1, 1),
    new Point(-1, -1),
    new Point(3, 4),
    new Point(10_000, 10_000),
    new Point(1_000_000, 1_000_000),
    new Point(1_000_000, -1_000_000),
    new Point(-1_000_000, 1_000_000),
  ];
  bench(
    "Sqrt magnitude",
    () => {
      points.forEach((point) => {
        point.magnitude();
      });
    },
    {
      time: 1000,
    }
  );
  bench(
    "SIN(ATAN) magnitude",
    () => {
      points.forEach((point) => {
        point.magnitudeWithSine();
      });
    },
    {
      time: 1000,
    }
  );
});
