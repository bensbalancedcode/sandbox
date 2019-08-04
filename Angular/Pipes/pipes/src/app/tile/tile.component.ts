import { Component, OnInit, Input } from '@angular/core';
import { TileData } from '../tileData';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input ('data') data: TileData;

  public readonly tileClass = "tile";
  public classVar = "tile enabled";
  
  private currentState: number;

  constructor(
    ) { }

  // one of several icons.
  // can be locked in place.
  // somehow swap with other icons.
  // does the tile know where it is, or does the grid track that?
  // public id: number;
  // public x_coord: number;
  // public y_coord: number;

 
  // public image: string;

  // ngOnClick() {
  //   console.log("tile saw click on itself");
  //   switch(this.data.state)
  //   {
  //     case this.data.Normal:
  //       this.SetSelected();
  //       break;
  //     case this.data.Locked:
  //       break;
  //     case this.data.Selected:
  //       this.data.state = this.data.Normal;
  //   }
  // }

  ngDoCheck(){
    console.log("ngDoCheck");
    this.CheckStatus();
  }

  public CheckStatus(){
    if (this.currentState !== this.data.state) {
      console.log("^^^CheckStatus called, currentState: " + this.currentState +
        " data state: " + this.data.state)
      this.SetTileColorByStatus(this.data.state);
      this.currentState = this.data.state;
    }
  }

  public SetTileColorByStatus(status: number){
    switch(status)
    {
      case this.data.Normal:
        this.classVar = "enabled " + this.tileClass;
        break;
      case this.data.Selected:
        this.classVar = "selected " + this.tileClass;
        break;
      case this.data.Locked:
        this.classVar = "locked " + this.tileClass;
        break;
      default:
        alert("unknown tile status: " + status);
    }
  }
 

  ngOnInit() {
    this.currentState = this.data.state;
  }

}
