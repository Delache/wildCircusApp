import { UserService } from './../shared/services/user.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('JWT-TOKEN');

    if (!token) {
      return next.handle(req);
    }
    const headers = req.headers.set('Authorization', `Bearer ${token}`);
    const authReq = req.clone({headers});
    return next.handle(authReq);
  }
}

