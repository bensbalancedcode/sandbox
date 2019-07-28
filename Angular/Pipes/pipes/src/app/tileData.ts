export class TileData {

    constructor(
        public id: number = 0,
        public x_coord: number= 0,
        public y_coord: number= 0,
        public image: string = ""
        ) { }
   
  public state: number;

  public readonly Locked: number = 0;
  public readonly Selected: number = 1;
  public readonly Normal: number = 2;

  public bubledClickEvent() : number
  {
    switch(this.state)
    {
      case this.Normal:
        this.SetSelected();
        break;
      case this.Locked:
        break;
      case this.Selected:
        this.state = this.Normal;
    }
    return this.state;
  }

  public SetSelected(){
    this.state = this.Selected;

  }

}