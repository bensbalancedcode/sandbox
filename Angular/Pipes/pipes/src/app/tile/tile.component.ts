import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor() { }

  // one of several icons.
  // can be locked in place.
  // somehow swap with other icons.
  // does the tile know where it is, or does the grid track that?
  public id: number;
  public x_coord: number;
  public y_coord: number;

  public locked: boolean;

  public image: string;

  ngOnInit() {
  }

}
