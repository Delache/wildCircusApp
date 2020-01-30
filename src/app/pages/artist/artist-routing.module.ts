import { ArtistFormComponent } from './artist-form/artist-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './artist.component';

const routes: Routes = [
  { path: '', component: ArtistComponent },
  { path: 'nouvel', component: ArtistFormComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
