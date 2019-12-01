export enum FlowDirection {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    WEST = "WEST",
  }

  export enum Adjancency {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    WEST = "WEST",
    
    // The same location
    Match = "MATCH",

    // locations do not share edge or the same spot
    Seperated = "SEPERATED"
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