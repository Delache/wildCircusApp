import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../../shared/modules/angular-material.module';
import { ComponentModule } from './../../shared/modules/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
import { PriceFormComponent } from './price-form/price-form.component';


@NgModule({
  declarations: [PriceComponent, PriceFormComponent],
  imports: [
    CommonModule,
    ComponentModule,
    AngularMaterialModule,
    PriceRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PriceModule { }
