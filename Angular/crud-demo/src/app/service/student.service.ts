import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class StudentService {

  public baseurl:any;

  constructor(private http:HttpClient) {
    this.baseurl = "http://localhost:3000/";

   }

   getUser(): Observable<any>{
    const url:string = this.baseurl + 'userData';
    return this.http.get(url);
  }

}
