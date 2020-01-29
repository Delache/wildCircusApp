import { MatSnackBar } from '@angular/material';
import { environment } from './../../../environments/environment';
import { Representation } from './../models/Representation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RepresentationService {
static URL = environment.url + '/representations';

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

getRepresentationByWord(word: string): Observable<Representation[]> {
  return this.http.get<Representation[]>(RepresentationService.URL + `/search/${word}`);
}
getAllRepresentations(): Observable<Representation[]> {
  return this.http.get<Representation[]>(RepresentationService.URL);
}
public getAll(): Observable<Representation[]> {
  return this.http
  .get(RepresentationService.URL)
  .pipe(map(this.convertDateFromServerToRepresentation));
}

private convertDateFromServerToRepresentation(representations: any[]): Representation[] {
  return representations.map(representation => new Representation(representation));
}

public getById(id: number): Observable<Representation> {
  return this.http
  .get(RepresentationService.URL + '/' + id)
  .pipe(map((representation: Representation) => new Representation(representation)));
}

public delete(id: number): Observable<any> {
  return this.http
  .delete(RepresentationService.URL + '/' + id);
}
public create(representation: Representation): Observable<any> {
  return this.http
  .post(RepresentationService.URL , representation);
}
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 1500
  });
}
modifyRepresentation(representation: Representation): Observable<any> {
  return this.http.put(RepresentationService.URL + `/${representation.id}`, representation);
}
}
