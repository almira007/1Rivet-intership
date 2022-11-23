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

  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;

  constructor(private http: HttpClient,
    private router: Router,
  ) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }

  /**
    * Function for login POST API
    * @author Almira Shaikh
    * @description post method for login form
    * @param 
    */
  login(user: User): Observable<string> {
    return this.http.post<string>(this.loginURL, user);
  }

  /**
    * 
    * @author Almira shaikh
    * @description logout service
    * @param 
    */
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
