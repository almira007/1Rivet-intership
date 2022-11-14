import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { delay, dematerialize, materialize, mergeMap, Observable, of, throwError } from 'rxjs';
import { User } from '../model/user.model';



@Injectable()
export class FaceBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const users = { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

      // authenticate
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        if (request.body.username === users.username && request.body.password === users.password) {
          // if login details are valid return user details
          let body = {
            id: users.id,
            username: users.username,
          };
          return of(new HttpResponse({ status: 200, body }));
        } else {
          // else return 400 bad request
          return throwError({ error: { message: 'username or password is incorrect' } });
        }
      }
      return next.handle(request);
    })
    )
  }
}


export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FaceBackendInterceptor,
  multi: true
};
