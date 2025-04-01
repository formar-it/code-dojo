import { Direction, Point } from "app-domain";

export interface InputManager {
  movementDirection(): Point;
  isRunning(): boolean;
}

export class InputManagerImplementation implements InputManager {
  private direction: Point = Direction.None;

  constructor() {
    window.addEventListener("keydown", ({ key }) => {
      this.direction = mapKeyToDirection(key, this.direction);
    });
    window.addEventListener("keyup", ({ key }) => {
      this.direction = mapKeyUpToDirection(key, this.direction);
    });
  }

  movementDirection(): Point {
    return this.direction;
  }

  isRunning(): boolean {
    return false;
  }
}

function mapKeyToDirection(key: string, currentDirection: Point): Point {
  switch (key) {
    case "w":
    case "ArrowUp":
      return currentDirection.setY(-1);
    case "a":
    case "ArrowLeft":
      return currentDirection.setX(-1);
    case "s":
    case "ArrowDown":
      return currentDirection.setY(1);
    case "d":
    case "ArrowRight":
      return currentDirection.setX(1);
    default:
      return currentDirection;
  }
}
function mapKeyUpToDirection(key: string, currentDirection: Point): Point {
  switch (key) {
    case "w":
    case "ArrowUp":
      return currentDirection.setY(0);
    case "a":
    case "ArrowLeft":
      return currentDirection.setX(0);
    case "s":
    case "ArrowDown":
      return currentDirection.setY(0);
    case "d":
    case "ArrowRight":
      return currentDirection.setX(0);
    default:
      return currentDirection;
  }
}
