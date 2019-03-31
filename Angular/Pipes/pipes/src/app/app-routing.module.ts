import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeGamepageComponent } from './pipe-gamepage/pipe-gamepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: PipeGamepageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
