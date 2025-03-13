import {
  addPoints,
  Direction,
  DirectionVector,
} from "../entities/vector-math.js";
import { User } from "../entities/office.js";

export function moveUser(user: User, direction: Direction) {
  user.position = addPoints(user.position, DirectionVector[direction]);
}
