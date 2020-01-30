import { Artist } from './../models/artist';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {
static URL = environment.url + '/artists';

  constructor(private http: HttpClient) { }

getAllArtist(): Observable<Artist[]> {
  return this.http.get<Artist[]>(ArtistService.URL);
}

public create(fd: FormData): Observable<any> {
  return this.http.post(ArtistService.URL + '/file' , fd);
}

public delete(id: number): Observable<any> {
  return this.http
  .delete(ArtistService.URL + '/' + id);
}
}
