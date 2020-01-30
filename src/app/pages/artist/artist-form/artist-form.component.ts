import { User } from './../../../shared/models/user';
import { ArtistService } from './../../../shared/services/artist.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss'],
})

export class ArtistFormComponent implements OnInit {

  selectedFile: File;
  fileName: string;
  formSubmitted = false;
  user: User;


  uploadForm = this.fb.group({
    username: [''],
    speciality: [''],
    description: [''],
    motto: [''],
    link: ['', Validators.required],
  });

  constructor(private artistService: ArtistService,
              private userService: UserService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

  // Getter
  get f() {
    return this.uploadForm.controls;
  }

  // Selection des fichiers à uploaddata
  onFileSelect(event) {
    this.selectedFile = event.target.files as File;
    this.fileName = event.target.files[0].name;
  }
  // Soumission et Modification du Formulaire
  onFormSubmit() {
    this.formSubmitted = true;
    const fd = new FormData();
    fd.append('username', this.uploadForm.get('username').value);
    fd.append('motto', this.uploadForm.get('motto').value);
    fd.append('speciality', this.uploadForm.get('speciality').value);
    fd.append('description', this.uploadForm.get('description').value);
    fd.append('file', this.selectedFile[0]);
    let save$;
    save$ = this.artistService.create(fd);
    save$.subscribe(() => this.router.navigate(['/artistes']));
  }

  onReset() {
    this.uploadForm.markAsUntouched();
    this.uploadForm.reset();
  }
  onClose() {
    this.router.navigate(['/artistes']);
  }
}


