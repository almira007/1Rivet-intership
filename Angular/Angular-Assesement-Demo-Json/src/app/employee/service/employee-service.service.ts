import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class EmployeeServiceService {

  public baseurl: any;

  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }

  
  getEmployee(): Observable<any>{
    const url:string = this.baseurl + 'employeeData';
    return this.http.get(url);
  }
}
