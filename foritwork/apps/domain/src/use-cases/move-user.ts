import { User } from "../entities/user.js";
import { Direction } from "../entities/vector-math.js";
import { MapService } from "../services/map-service.js";

export function moveUser(user: User, map: MapService, direction: Direction) {
  const newPosition = user.position.add(direction);

  if (!map.isPositionFree(newPosition)) return;

  user.position = newPosition;
}
