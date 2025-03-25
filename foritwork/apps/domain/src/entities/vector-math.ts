import { ScenePoint } from "./office.js";

export interface Point {
  x: number;
  y: number;
}

export function multiplyPoint(point: Point, scale: number): Point {
  return {
    x: point.x * scale,
    y: point.y * scale,
  };
}

export function addPoints(a: Point, b: Point): Point {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}

export const Direction = {
  E: "E",
  W: "W",
  N: "N",
  S: "S",
  NE: "NE",
  NW: "NW",
  SE: "SE",
  SW: "SW",
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction];

export const DirectionVector: Record<Direction, ScenePoint> = {
  E: {
    x: 1,
    y: 0,
  },
  W: {
    x: -1,
    y: 0,
  },
  N: {
    x: 0,
    y: -1,
  },
  S: {
    x: 0,
    y: 1,
  },
  NE: {
    x: 0.5,
    y: -0.5,
  },
  NW: {
    x: -0.5,
    y: -0.5,
  },
  SE: {
    x: 0.5,
    y: 0.5,
  },
  SW: {
    x: -0.5,
    y: 0.5,
  },
};
