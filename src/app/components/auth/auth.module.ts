import { DialogSignupComponent } from './sign-up-form/dialog-signup/dialog-signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './../../shared/modules/angular-material.module';

import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
    DialogSignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    DialogSignupComponent,
  ]
})
export class AuthModule { }
