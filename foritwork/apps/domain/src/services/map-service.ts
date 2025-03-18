import { Point } from "../entities/vector-math.js";

export interface MapService {
  isPositionFree(point: Point): boolean;
}
