import { describe, test, expect } from "vitest";
import { User } from "../entities/office.js";
import { moveUser } from "./move-user.js";
import { Direction } from "../entities/vector-math.js";
import { MapService } from "../services/map-service.js";

describe("MoveUser UseCase", () => {
  test("Given a user trying to move to the right without being blocked, it should move", () => {
    const user: User = {
      id: "1",
      position: {
        x: 0,
        y: 0,
      },
    };

    const mapService: MapService = {
      isPositionFree: () => {
        return true;
      },
    };

    moveUser(user, mapService, Direction.E);

    expect(user.position).toEqual({ x: 1, y: 0 });
  });

  test("Given a user trying to move to the right but being blocked, it should not move", () => {
    const user: User = {
      id: "1",
      position: {
        x: 0,
        y: 0,
      },
    };

    const mapService: MapService = {
      isPositionFree: () => {
        return false;
      },
    };

    moveUser(user, mapService, Direction.E);

    expect(user.position).toEqual({ x: 0, y: 0 });
  });
});
