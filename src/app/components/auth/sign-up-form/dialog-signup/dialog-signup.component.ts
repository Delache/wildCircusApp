import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-signup',
  templateUrl: './dialog-signup.component.html',
  styleUrls: ['./dialog-signup.component.scss']
})

export class DialogSignupComponent implements OnInit {
  constructor(private router: Router,
              private dialogRef: MatDialogRef<DialogSignupComponent>) { }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate(['/auth/connexion']);
    this.dialogRef.close();
  }
}
