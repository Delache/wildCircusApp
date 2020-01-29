import { environment } from './../../../environments/environment';
import { Document } from './../models/document';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
static URL = environment.url + '/document';

  constructor(private http: HttpClient) { }

getDocumentsByWord(word: string): Observable<Document[]> {
  return this.http.get<Document[]>(DocumentsService.URL + `/recherche/${word}`);
}
getAllDocuments(): Observable<Document[]> {
  return this.http.get<Document[]>(DocumentsService.URL + '/accueil');
}
public deleteFile(id: number ): Observable<any> {
  console.log('delete id: ' + id);
  return this.http.delete<Document>(DocumentsService.URL + `/${id}`);
}
public getAll(): Observable<Document[]> {
  return this.http
  .get(DocumentsService.URL)
  .pipe(map(this.convertDateFromServerTodocuments));
}

private convertDateFromServerTodocuments(documents: any[]): Document[] {
  return documents.map(document => new document(document));
}

public getById(id: number): Observable<Document> {
  return this.http
  .get(DocumentsService.URL + '/' + id)
  .pipe(map((document: Document) => new Document(document)));
}

public create(fd: FormData): Observable<any> {
  return this.http
  .post(DocumentsService.URL + '/file' , fd);
}


public update(id: number, fd: FormData): Observable<any> {
  return this.http
  .put(DocumentsService.URL + '/fileupload/' + id, fd);
}

public delete(id: number): Observable<any> {
  return this.http
  .delete(DocumentsService.URL + '/' + id);
}
}
