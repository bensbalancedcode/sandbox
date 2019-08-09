import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeGamepageComponent } from './pipe-gamepage/pipe-gamepage.component';
import { TileComponent } from './tile/tile.component';
import { TileData } from './tileData';
import { TileLocation } from './tileLocation';

@NgModule({
  declarations: [
    AppComponent,
    PipeGamepageComponent,
    TileComponent,
    TileLocation
    ,    TileData // seems this isn't needed... leaving it in case it is later
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
