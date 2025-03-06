export interface Office {
  rooms: Room[];
  name: string;
  users: User[];
  desktops: Desktop[];
  grids: Grid[];
}

export interface Grid {
  tiles: Tile[];
  objects: Object[];
  width: number;
  height: number;
}

export interface GridPoint {
  x: number;
  y: number;
}
export interface ScenePoint {
  x: number;
  y: number;
}

export interface Tile {
  id: string;
  position: GridPoint;
  type: "floor" | "wall"; //string literal type union
  style: string;
}

export interface Object {
  id: string;
  position: ScenePoint;
  type: string;
  variant: string;
  color: string;
  zIndex: number;
}

export interface Avatar {
  head: string;
  chest: string;
  legs: string;
  extras: string;
}

export interface User {
  id: string;
  name: string;
  avatar: Avatar;
  position: ScenePoint;
}
export interface GridArea extends GridPoint {
  width: number;
  height: number;
}

export interface Desktop {
  id: string;
  owner: User | null;
  area: GridArea;
}

export interface Room {
  id: string;
  area: GridArea;
  isLocked: boolean;
}
