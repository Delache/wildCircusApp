import { Price } from './../models/price';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class PriceService {

  static URL = environment.url + '/prices';


  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

getPrices(): Observable < Price[] > {
  return this.http.get<Price[]>(PriceService.URL);
}

createPrice(price: Price): Observable < any > {
  return this.http.post(PriceService.URL, price);
}

deletePrice(id: number): Observable < any > {
  return this.http.delete<Price>(PriceService.URL + `/${id}`);
}
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 1500
  });
}
}
