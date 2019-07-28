import { Component, OnInit, Input } from '@angular/core';
import { TileData } from '../tileData';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input ('data') data: TileData;

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

 

  ngOnInit() {
  }

}
