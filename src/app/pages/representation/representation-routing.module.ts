import { RepresentationFormComponent } from './representation-form/representation-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepresentationComponent } from './representation.component';

const routes: Routes = [
  { path: '', component: RepresentationComponent },
  { path: 'nouvelle', component: RepresentationFormComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentationRoutingModule { }
