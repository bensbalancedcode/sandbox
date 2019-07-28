import { Component, OnInit } from '@angular/core';
import { TileData } from '../tileData';
import { isNullOrUndefined } from 'util';
//import { TileData } from '../tile/tile.component';

@Component({
  selector: 'app-pipe-gamepage',
  templateUrl: './pipe-gamepage.component.html',
  styleUrls: ['./pipe-gamepage.component.scss']
})
export class PipeGamepageComponent implements OnInit {

  constructor() { }

  public tileRows: Array<Array<TileData>>;
  private readonly tilesInRow = 3;
  private readonly rows = 3;
  protected selectedTile: TileData;
  
  ngOnInit() {
    console.log("ngOnInit");
    let counter = 0;
    this.tileRows = new Array<Array<TileData>>(this.rows);

    for (var i = 0; i < this.rows; i++) {
      var tRow = new Array<TileData>(this.tilesInRow);
      console.log('row ' + i + ' has columns: ' + tRow.length);
      for (var h = 0; h < this.tilesInRow; h++){
        var tile = new TileData(counter, h, i, counter.toString());
        // tile.image = 'tile ' + counter;
        // console.log('tile: ' + tile.image);
        // tile.id = counter;
        counter++; 
        tRow[h] = tile;
      };
      this.tileRows[i] = tRow;
    };

    // this.tileRows.forEach(tRow => {
    //   tRow = new Array<TileData>(this.tilesInRow);
    //   tRow.forEach(tile => {
    //     tile.image = 'tile ' + counter;
    //     console.log(tile.image);
    //     tile.id = counter;
    //     counter++; 
    //   });
    // });

  }

  tileClick(tile: TileData){
    console.log(" parent sees tile clicked on " + tile.id);
    if (this.selectedTile != undefined)
    {
      let selectedState = tile.bubledClickEvent();
      if (selectedState == tile.Selected)
        SwapTiles(this.selectedTile, tile);

    }

  }

}
