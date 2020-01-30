import { emailValidator } from './../../../core/email.validator';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})

export class SignInFormComponent implements OnInit {

  signInForm: FormGroup;
  connected = true;

  constructor(private router: Router,
              private formbuilder: FormBuilder,
              private userService: UserService
              ) { }

  ngOnInit() {
    this.signInForm = this.formbuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required]]
    });
  }

  userConnexion() {
    this.userService.connexion(this.signInForm.value).subscribe(() => {
      this.router.navigate(['/presentation']);
    });
  }
}
