import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialog} from '@angular/material';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';


interface MailChimpResponse {
  result: string;
  msg: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  submitted = false;
  // tslint:disable-next-line: max-line-length
  mailChimpEndpoint = 'https://Tesrost-json?u=a1a172a1f21c9caa69eba4268&id=bc3bb22ceb&';
  error = '';
  constructor(private http: HttpClient,
              private router: Router,
              public dialog: MatDialog) { }


    mailForm = new FormGroup({
      EMAIL: new FormControl('', [Validators.required]),
    });


    ngOnInit() {
    }

    onSubmit() {
      this.error = '';
      if (this.mailForm.status === 'VALID' && this.mailForm.status === 'VALID') {

        const params = new HttpParams()
        .set('EMAIL', (this.mailForm.get('EMAIL').value))
        .set('b_a1a172a1f21c9caa69eba4268_bc3bb22ceb', ''); // hidden input name

        const mailChimpUrl = this.mailChimpEndpoint + params.toString();

        // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
        this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
          if (response.result && response.result !== 'error') {
            this.submitted = true;
          } else {
            this.error = response.msg;
          }
        }, error => {
          console.error(error);
          this.error = 'Sorry, an error occurred.';
        });
        this.mailForm.reset();
          }
      }
    }
