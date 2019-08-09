import { Component, OnInit } from '@angular/core';
import { TileData } from '../tileData';
import { isNullOrUndefined } from 'util';
import { PipeService } from '../pipe.service';
import { TileLocation } from '../tileLocation';

@Component({
  selector: 'app-pipe-gamepage',
  templateUrl: './pipe-gamepage.component.html',
  styleUrls: ['./pipe-gamepage.component.scss'],
  providers: [PipeService]
})
export class PipeGamepageComponent implements OnInit {

  constructor(
    private pipeservice: PipeService
  ) { }

  // could control children f they're kept in array, 
  // but then arranging into a grid is harder

  // tileRows are the y coord
  public tileRows: Array<Array<TileData>>;
  private readonly tilesInRow = 3;
  private readonly rows = 3;
  protected selectedTile: TileData;

  private readonly flat_Vertical_source = "assets/tiles02/flat_vertical.png";

  private readonly flat_Horizontal_source = "assets/tiles02/flat_horizontal.png";
  
  ngOnInit() {
    console.log("ngOnInit");
    let counter = 0;
    this.tileRows = new Array<Array<TileData>>(this.rows);

    for (var i = 0; i < this.rows; i++) {
      var tRow = new Array<TileData>(this.tilesInRow);
      console.log('row ' + i + ' has columns: ' + tRow.length);
      for (var h = 0; h < this.tilesInRow; h++){
        let source = ((h + i) % 2 > 0) ? this.flat_Horizontal_source : this.flat_Vertical_source;
        var location = new TileLocation(h, i);
        var tile = new TileData(counter, location, source);
        // tile.image = 'tile ' + counter;
        // console.log('tile: ' + tile.image);
        // tile.id = counter;
        counter++; 
        tRow[h] = tile;
      };
      this.tileRows[i] = tRow;
    };
  }

  // bug, deslect appears broken. might just be doubled click events
  tileClick(tile: TileData){
    // console.log("*** parent sees tile clicked on " + tile.id);
    if (this.selectedTile != undefined)
    {
      let selectedState = tile.bubledClickEvent();
      if (selectedState == tile.Selected)
      {
        this.SwapTiles(this.selectedTile, tile);
      }
      this.selectedTile = undefined;
    }
    else {
      let selectedState = tile.bubledClickEvent();
      if (selectedState == tile.Selected)
      {
        //this.SwapTiles(this.selectedTile, tile);
        this.selectedTile = tile;
      }
    }

    // if (this.selectedTile != undefined)
      // console.log("ending selected tile is: " + this.selectedTile.id);
    // else
      // console.log("ending selected tile is: undefined" );

    // console.log("");
  }

  SwapTiles(tileA: TileData, tileB: TileData){
    // console.log("swapping tiles, before:");
    // console.log("tile A: " + this.PrintTileCoords(tileA));
    // console.log("tileB: " + this.PrintTileCoords(tileB));
    // locate each, swap
    let middle = tileA;
    let bLoc = tileB.location;
    this.tileRows[tileA.location.y_coord][tileA.location.x_coord] = tileB;
    tileB.location.x_coord = tileA.location.x_coord;
    tileB.location.y_coord = tileA.location.y_coord;

    this.tileRows[bLoc.y_coord][bLoc.x_coord] = middle;
    middle.location.x_coord = bLoc.x_coord;
    middle.location.y_coord = bLoc.y_coord;

    tileA.state = tileA.Normal;
    tileB.state = tileB.Normal;

    // console.log("after swap");
    // console.log("tile A: " + this.PrintTileCoords(tileA));
    // console.log("tileB: " + this.PrintTileCoords(tileB));
  }

  PrintTileCoords(tile: TileData): string {
    return "tile " + tile.id + " at x: " + tile.location.x_coord
      + ", y: " + tile.location.y_coord;
  }

  CountdownReached(){
    // when the timer ticks over, the currently 'locking' tile is put in finished lock state,
    // and the next tile in line is found.
    // if the next tile is the goal state, the game is won.
    // if the next tile is valid, it is set to 'locking'.
    // else if not valid, the game is over

    // call countdownReachedCommand with the ID of the next tile to lock


  }

}
