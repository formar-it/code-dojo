import { User } from "../entities/user.js";
import { Direction } from "../entities/vector-math.js";
import { MapService } from "../services/map-service.js";
import { SyncService } from "../services/sync-service.js";

export interface MoveUserDependencies {
  syncService: SyncService;
  mapService: MapService;
  user: User;
}

export function moveUser(
  { user, syncService, mapService }: MoveUserDependencies,
  direction: Direction
) {
  const newPosition = user.position.add(direction);

  if (!mapService.isPositionFree(newPosition)) return;

  user.position = newPosition;

  void syncService.sync(user);
}
