import { Component, OnInit, Input } from '@angular/core';
import { TileSpot } from '../tileSpot';
import { TileState } from '../enums';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input('tileSpotModel') tileSpotModel: TileSpot;

  public readonly tileClass = "tile";
  public classVar = "tile enabled";

  private currentState: TileState;

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

  ngDoCheck() {
    console.log("ngDoCheck");
    this.CheckStatus();
  }

  public CheckStatus() {
    if (this.currentState !== this.tileSpotModel.state) {
      console.log("^^^CheckStatus called, currentState: " + this.currentState +
        " data state: " + this.tileSpotModel.state)
      this.SetTileColorByStatus(this.tileSpotModel.state);
      this.currentState = this.tileSpotModel.state;
    }
  }

  public SetTileColorByStatus(status: TileState) {
    console.log("^^^^ setting tile color by state: " + status);
    switch (status) {
      case TileState.Normal:
        this.classVar = "enabled " + this.tileClass;
        break;
      case TileState.Selected:
        this.classVar = "selected " + this.tileClass;
        break;
      case TileState.Locked:
        this.classVar = "locked " + this.tileClass;
        break;
      case TileState.Locking:
        this.classVar = "locking " + this.tileClass;
        break;
      default:
        alert("unknown tile status: " + status);
    }
  }


  ngOnInit() {
    this.currentState = this.tileSpotModel.state;
  }

}
