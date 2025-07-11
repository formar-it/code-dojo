import { describe, test, expect, vi } from "vitest";
import { User } from "../entities/user.js";
import { moveUser } from "./move-user.js";
import { Direction, Point } from "../entities/vector-math.js";
import { MapService } from "../services/map-service.js";
import { SyncService } from "../services/sync-service.js";

describe("MoveUser UseCase", () => {
  test("Given a user trying to move to the right without being blocked, it should move", () => {
    const user: User = {
      id: "1",
      position: new Point(0, 0),
    };

    const mapService: MapService = {
      isPositionFree: () => {
        return true;
      },
    };

    const syncService = {
      sync: vi.fn(() => Promise.resolve()),
    } satisfies SyncService;

    moveUser({ user, mapService, syncService }, Direction.Right);

    expect(user.position).toEqual(new Point(1, 0));

    expect(syncService.sync).toHaveBeenCalledWith(user);
  });

  test("Given a user trying to move to the right but being blocked, it should not move", () => {
    const user: User = {
      id: "1",
      position: new Point(0, 0),
    };

    const mapService: MapService = {
      isPositionFree: () => {
        return false;
      },
    };

    const syncService = {
      sync: vi.fn(() => Promise.resolve()),
    } satisfies SyncService;

    moveUser({ user, mapService, syncService }, Direction.Right);

    expect(user.position).toEqual(new Point(0, 0));

    expect(syncService.sync).not.toHaveBeenCalledWith(user);
  });
});
