import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input ('id') id_param: number;

  @Input ('x_coord') x_param: number;
  @Input ('y_coord') y_param: number;

  @Input ('image') image_param: number;
  constructor(
    public id: number = 0,
    public x_coord: number= 0,
    public y_coord: number= 0,
    public image: string = ""
    ) { }

  // one of several icons.
  // can be locked in place.
  // somehow swap with other icons.
  // does the tile know where it is, or does the grid track that?
  // public id: number;
  // public x_coord: number;
  // public y_coord: number;

  public locked: boolean;

  // public image: string;

  ngOnInit() {
  }

}
