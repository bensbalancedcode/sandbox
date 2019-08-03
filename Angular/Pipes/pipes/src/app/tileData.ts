export class TileData {

    constructor(
        public id: number = 0,
        public x_coord: number= 0,
        public y_coord: number= 0,
        public image: string = "",
        ) { 
          this.state = this.Normal;
        }
  public state: number;
   

  public readonly Locked: number = 0;
  public readonly Selected: number = 1;
  public readonly Normal: number = 2;

  public bubledClickEvent() : number
  {
    console.log('tile data click bubbled up to tile: ' 
      + this.id + 'starting state: ' + this.state);
    switch(this.state)
    {
      case this.Normal:
        this.state = this.Selected;
        break;
      case this.Locked:
        break;
      case this.Selected:
        this.state = this.Normal;
    }
    
    console.log('post click on tile: ' 
      + this.id + 'ending state: ' + this.state);
    return this.state;
  }

}