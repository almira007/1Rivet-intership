import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from '../user/model/user.model';

@Injectable()
export class AuthGuardService {

  public baseUrl: string;
  public authSubject: Subject<boolean>

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:3000/';
    this.authSubject = new Subject()
  }

  
  /**
   * Get list of user data
   * @returns User data
   */
  public getLoginData(): Observable<Users[]>{
    const url: string = this.baseUrl + 'userData';
    return this.http.get<Users[]>(url);
  }
 
  public addRegisterData(user: Users): Observable<Users>{
    const url: string = this.baseUrl + 'userData';
    return this.http.post(url,user);
  } 
}
