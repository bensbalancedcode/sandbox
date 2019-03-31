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
    let counter = 0;
    this.tileRows = new Array<Array<TileComponent>>(this.rows);
    this.tileRows.forEach(tRow => {
      tRow = new Array<TileComponent>(this.tilesInRow);
      tRow.forEach(tile => {
        tile.image = 'tile';
        tile.id = counter;
        counter++; 
      });
    });

  }

}
