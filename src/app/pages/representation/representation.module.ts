import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../shared/modules/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentationRoutingModule } from './representation-routing.module';
import { RepresentationComponent } from './representation.component';
import { RepresentationFormComponent } from './representation-form/representation-form.component';

@NgModule({
  declarations: [RepresentationComponent, RepresentationFormComponent],
  imports: [
    CommonModule,
    RepresentationRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class RepresentationModule { }
