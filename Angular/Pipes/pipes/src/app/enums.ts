enum Direction {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    WEST = "WEST",
  }

  enum TileState {
    Locked = "LOCKED",
    Locking = "LOCKING",
    Selected = "SELECTED",
    Normal = "NORMAL",
  }

  enum TileType {
      // straight lines
      NorthToSouth, 
      WestToEast, 
      // right angles
      NorthToEast,
      NorthToWest,
      SouthToEast,
      SouthToWest
  }