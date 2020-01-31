import { ServerUrlPipe } from './../../shared/serveurUrl';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../shared/modules/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { CarouselModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ArtistCardComponent } from './artist-card/artist-card.component';


@NgModule({
  declarations: [ArtistComponent, ArtistFormComponent, ArtistCardComponent, ServerUrlPipe],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    CarouselModule,
    TooltipModule.forRoot(),
  ], exports: [ServerUrlPipe]
})
export class ArtistModule { }
