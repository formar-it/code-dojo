export class Point {
  constructor(
    public readonly x: number,
    public readonly y: number
  ) {}

  setX(x: number): Point {
    return new Point(x, this.y);
  }

  setY(y: number): Point {
    return new Point(this.x, y);
  }

  multiply(scalar: number): Point {
    return new Point(this.x * scalar, this.y * scalar);
  }

  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y);
  }

  magnitudeWithSine(): number {
    if (this.x == 0) return Math.abs(this.y);
    if (this.y == 0) return Math.abs(this.x);
    return Math.abs(this.x / Math.sin(Math.atan(this.x / this.y)));
  }

  magnitude(): number {
    return Math.abs(Math.sqrt(this.x ** 2 + this.y ** 2));
  }

  divide(scalar: number): Point {
    if (scalar === 0) throw new Error("Division by zero");
    return new Point(this.x / scalar, this.y / scalar);
  }

  normalize(): Point {
    return this.divide(this.magnitude());
  }
}

export const Direction = {
  None: new Point(0, 0),
  Right: new Point(1, 0),
  Left: new Point(-1, 0),
  Up: new Point(0, -1),
  Down: new Point(0, 1),
  UpRight: new Point(1, -1).normalize(),
  UpLeft: new Point(-1, -1).normalize(),
  DownRight: new Point(1, 1).normalize(),
  DownLeft: new Point(-1, 1).normalize(),
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction];
