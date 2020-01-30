import { RepresentationService } from './../../../shared/services/representation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-representation-form',
  templateUrl: './representation-form.component.html',
  styleUrls: ['./representation-form.component.scss']
})
export class RepresentationFormComponent implements OnInit {


  constructor(private representationService: RepresentationService,
              private router: Router,
              private formbuilder: FormBuilder) { }

  representationForm: FormGroup;

  ngOnInit() {
    this.representationForm = this.formbuilder.group({
      city: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  resetForm() {
    this.representationForm.reset();
  }

  onClose() {
      this.router.navigate(['/representations']);
  }

  onSubmitRepresentationForm() {
    this.representationForm.value.date = this.representationForm.value.date.toLocaleDateString().split('/').reverse().join('-');
    this.representationForm.value.time = this.representationForm.value.time + ':00';
    this.representationService.create(this.representationForm.value).subscribe(() =>
    this.router.navigate(['representations'])
        );
  }
}

