import { Component, OnInit } from '@angular/core';
import { TileSpot } from '../tileSpot';
import { isNullOrUndefined } from 'util';
import { PipeService } from '../pipe.service';
import { TileLocation } from '../tileLocation';
import { TileType, TileState, FlowDirection, Adjancency } from '../enums';
import { TileData } from '../tileData';
import { FlowDirectionService } from '../flowDirection.service';

@Component({
  selector: 'app-pipe-gamepage',
  templateUrl: './pipe-gamepage.component.html',
  styleUrls: ['./pipe-gamepage.component.scss'],
  providers: [PipeService, FlowDirectionService]
})
export class PipeGamepageComponent implements OnInit {

  constructor(
    private pipeservice: PipeService,
    private flowDirectionService: FlowDirectionService,

  ) {
    this.initialFlowLocation = new TileLocation(0, -1);

  }

  private readonly initialFlowLocation: TileLocation;

  // tileRows are the y coord
  public tileRows: Array<Array<TileSpot>>;
  private readonly tilesInRow = 3;
  private readonly rows = 3;
  protected selectedTile: TileSpot;
  protected lockedTiles: Array<TileLocation>;
  protected lastLockedSpot: TileLocation; // filling spot

  private readonly flat_Vertical_source = "assets/tiles02/flat_vertical.png";

  private readonly flat_Horizontal_source = "assets/tiles02/flat_horizontal.png";



  ngOnInit() {
    console.log("ngOnInit");
    let counter = 0;
    this.tileRows = new Array<Array<TileSpot>>(this.rows);

    for (var i = 0; i < this.rows; i++) {
      var tRow = new Array<TileSpot>(this.tilesInRow);
      console.log('row ' + i + ' has columns: ' + tRow.length);
      for (var h = 0; h < this.tilesInRow; h++) {
        let type = this.pickTileType(h, i);
        let imageSource = this.getImageSourceString(type);
        var location = new TileLocation(h, i);
        var tileData = new TileData(type, imageSource);
        var tile = new TileSpot(counter, location, tileData, this.pipeservice, this.flowDirectionService);
        counter++;
        tRow[h] = tile;
      };
      this.tileRows[i] = tRow;
    };

    // initialize the entry point to come from above location 0, 0
    this.lastLockedSpot = this.initialFlowLocation;
  }

  pickTileType(y: number, x: number): TileType {
    return ((y + x) % 2 > 0) ? TileType.WestToEast : TileType.NorthToSouth;
  }

  getImageSourceString(tileType: TileType): string {
    switch (tileType) {
      case TileType.NorthToSouth:
        return this.flat_Vertical_source;
      default:
        return this.flat_Horizontal_source;
    }
  }

  // bug, deslect appears broken. might just be doubled click events
  tileClick(tile: TileSpot) {
    console.log("*** parent sees tile clicked on " + tile.id);
    if (this.selectedTile != undefined) {
      let selectedState = tile.bubledClickEvent();
      if (selectedState == TileState.Selected) {
        this.SwapTiles(this.selectedTile, tile);
      }
      this.selectedTile = undefined;
    }
    else {
      let selectedState = tile.bubledClickEvent();
      if (selectedState == TileState.Selected) {
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

  SwapTiles(tileA: TileSpot, tileB: TileSpot) {
    if (tileA.state == TileState.Locked ||
      tileA.state == TileState.Locking ||
      tileB.state == TileState.Locked ||
      tileB.state == TileState.Locking) {
      console.log("tried to swap locked tiles.");
      return;
    }
    // console.log("swapping tiles, before:");
    // console.log("tile A: " + this.PrintTileCoords(tileA));
    // console.log("tile B: " + this.PrintTileCoords(tileB));
    // locate each, swap
    let middle = this.CopyTileData(tileA.tileData);;
    // let bLoc = JSON.parse(JSON.stringify(tileB.location));
    // let aLoc = JSON.parse(JSON.stringify(tileA.location));

    tileA.tileData = this.CopyTileData(tileB.tileData);
    tileB.tileData = middle;

    tileA.state = TileState.Normal;
    tileB.state = TileState.Normal;

    // console.log("after swap");
    // console.log("tile A: " + this.PrintTileCoords(tileA));
    // console.log("tileB: " + this.PrintTileCoords(tileB));
  }

  GetTileAtLocation(location: TileLocation): TileSpot {
    return this.tileRows[location.y_coord][location.x_coord];
  }

  CountdownReached() {
    // when the timer ticks over, the currently 'locking' tile is put in finished lock state,
    if
    // and the next tile in line is found.
    // if the next tile is the goal state, the game is won.
    // if the next tile is valid, it is set to 'locking'.
    // else if not valid, the game is over

    // call countdownReachedCommand with the ID of the next tile to lock


  }

  CopyTileData(tileData: TileData): TileData {
    return JSON.parse(JSON.stringify(tileData));
  }


  // examples: X, Y
  // A: 0, 0 and B: 0, 1 (one below)
  // A: 1, 1 and B: 2, 1  (one right)
  // A: 2, 2 and B: 1, 1 (not sharing)
  CompareTileLocation(locA: TileLocation, locB: TileLocation): Adjancency {

    if (locA.x_coord == locB.x_coord &&
      locA.y_coord == locB.y_coord) {
      return Adjancency.Match;
    }
    let diffX = Math.abs(locA.x_coord - locB.x_coord);
    let diffY = Math.abs(locA.y_coord - locB.y_coord);

    if ((diffY + diffX) === 1) {
      // we know the tiles are adjacent by one, need to figure out which direction
      if (diffX == 1 && diffY == 0) {
        // now pick between east and west... if that makes sense
      }
      else if (diffX == 0 && diffY == 1) {

      } else {
        console.log("Unexpected location difference: X= " + diffX + " Y= " + diffY);
      }
    }
    else {
      return Adjancency.Seperated;
    }
  }

  PrintTileCoords(tile: TileSpot): string {
    return "tile " + tile.id + " at x: " + tile.location.x_coord
      + ", y: " + tile.location.y_coord;
  }

}
