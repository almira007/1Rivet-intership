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


  /**
    * loginUrl store
    * @author Almira shaikh
    * @description loginUrl in store envirement file
    * @param 
    */
  public loginURL = environment.loginUrl;

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

  /**
    * login form function 
    * @author Almira shaikh
    * @description login form function in post method
    * @param 
    */
  login(user: User): Observable<string> {
    return this.http.post<string>(this.loginURL, user);
  }

  /**
    * logout form function 
    * @author Almira shaikh
    * @description logout in remove the item in localStrorage
    * @param 
    */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
