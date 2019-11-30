export enum Direction {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    WEST = "WEST",
  }

  export enum TileState {
    Locked = "LOCKED",
    Locking = "LOCKING",
    Selected = "SELECTED",
    Normal = "NORMAL",
  }

  export enum TileType {
      // straight lines
      NorthToSouth = "NS", 
      WestToEast = "WE", 
      // right angles
      NorthToEast = "NE",
      NorthToWest = "NW",
      SouthToEast = "SE",
      SouthToWest = "SW"
  }