import {
  addPoints,
  Direction,
  DirectionVector,
} from "../entities/vector-math.js";
import { User } from "../entities/office.js";
import { MapService } from "../services/map-service.js";

export function moveUser(user: User, map: MapService, direction: Direction) {
  const newPosition = addPoints(user.position, DirectionVector[direction]);

  if (!map.isPositionFree(newPosition)) return;

  user.position = newPosition;
}
