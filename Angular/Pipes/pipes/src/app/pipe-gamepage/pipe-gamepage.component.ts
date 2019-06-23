import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-pipe-gamepage',
  templateUrl: './pipe-gamepage.component.html',
  styleUrls: ['./pipe-gamepage.component.scss']
})
export class PipeGamepageComponent implements OnInit {

  constructor() { }

  private tileRows: Array<Array<TileComponent>>;
  private readonly tilesInRow = 3;
  private readonly rows = 3;
  
  ngOnInit() {
    console.log("ngOnInit");
    let counter = 0;
    this.tileRows = new Array<Array<TileComponent>>(this.rows);

    for (var i = 0; i < this.rows; i++) {
      var tRow = new Array<TileComponent>(this.tilesInRow);
      console.log('row ' + i + ' has columns: ' + tRow.length);
      for (var h = 0; h < this.tilesInRow; h++){
        var tile = new TileComponent(counter, h, i, counter.toString());
        // tile.image = 'tile ' + counter;
        // console.log('tile: ' + tile.image);
        // tile.id = counter;
        counter++; 
        tRow[h] = tile;
      };
      this.tileRows[i] = tRow;
    };

    // this.tileRows.forEach(tRow => {
    //   tRow = new Array<TileComponent>(this.tilesInRow);
    //   tRow.forEach(tile => {
    //     tile.image = 'tile ' + counter;
    //     console.log(tile.image);
    //     tile.id = counter;
    //     counter++; 
    //   });
    // });

  }

}
