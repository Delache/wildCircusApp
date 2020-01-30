import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../shared/modules/angular-material.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentationRoutingModule } from './representation-routing.module';
import { RepresentationComponent } from './representation.component';
import { RepresentationFormComponent } from './representation-form/representation-form.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [RepresentationComponent, RepresentationFormComponent],
  imports: [
    CommonModule,
    RepresentationRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: LOCALE_ID,
    useValue: 'fr'
    }, ]
})
export class RepresentationModule { }
