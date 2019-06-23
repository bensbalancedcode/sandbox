export class TileData {

    constructor(
        public id: number = 0,
        public x_coord: number= 0,
        public y_coord: number= 0,
        public image: string = ""
        ) { }
   
  public locked: boolean;

}