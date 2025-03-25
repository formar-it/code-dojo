import { User } from "../entities/user.js";
import {
  addPoints,
  Direction,
  DirectionVector,
  multiplyPoint,
} from "../entities/vector-math.js";
import { MapService } from "../services/map-service.js";

export function moveUser(user: User, map: MapService, direction: Direction) {
  const newDirection = multiplyPoint(DirectionVector[direction], 10);
  const newPosition = addPoints(user.position, newDirection);

  if (!map.isPositionFree(newPosition)) return;

  user.position = newPosition;
}
