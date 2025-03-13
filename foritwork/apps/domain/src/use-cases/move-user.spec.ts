import { describe, test, expect } from "vitest";
import { User } from "../entities/office.js";
import { moveUser } from "./move-user.js";
import { Direction } from "../entities/vector-math.js";

describe("MoveUser UseCase", () => {
  test("Given a user trying to move to the right without being blocked, it should move", () => {
    const user: User = {
      id: "1",
      position: {
        x: 0,
        y: 0,
      },
    };

    moveUser(user, Direction.E);

    expect(user.position).toEqual({ x: 1, y: 0 });
  });
});
