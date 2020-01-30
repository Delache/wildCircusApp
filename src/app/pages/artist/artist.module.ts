import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../shared/modules/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ArtistComponent, ArtistFormComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class ArtistModule { }
