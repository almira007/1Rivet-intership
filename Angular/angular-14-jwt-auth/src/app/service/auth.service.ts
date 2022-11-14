import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginURL = environment.loginUrl;
  public AUTH_API = environment.AUTH_API;

  // const AUTH_API = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6IkFsbWlyYSIsInBhc3N3b3JkIjoiQWxtaXJhQDEyMyJ9.DE6eiFc3fPCvd7NCULsbZhhXlNRqhhl5fhkq3Hb8x8U';


  // const httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${this.AUTH_API}users/authenticate`, { username, password }).pipe(map((userData: User) => {
      // userData.expirationTime = new Date((new Date().getTime()) * 60);
      // userData.tokenId = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6IkFsbWlyYSIsInBhc3N3b3JkIjoiQWxtaXJhQDEyMyJ9.DE6eiFc3fPCvd7NCULsbZhhXlNRqhhl5fhkq3Hb8x8U";
      // localStorage.setItem('user', JSON.stringify(userData));
      // this.currentUserSubject.next(userData);
      return userData;
    }))
    // return this.http.post(
    //   this.AUTH_API + 'signin',
    //   {
    //     username,
    //     password,
    //   }.pipe(map((userData: User) => {

    //   }))
    // );
    // return this.http.post(this.AUTH_API + 'refreshtoken', {}, this.httpOptions);

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null!);
    this.router.navigateByUrl('login');

  }
}
