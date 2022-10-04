import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';


@Injectable()
export class EmployeeServiceService {

  public baseurl: any;

  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }

  getEmployeeById(id:number): Observable<any>{
    const url:string = this.baseurl + 'employeeList/' + id;
    return this.http.get(url);
  }
  
  getEmployee(): Observable<any>{
    const url:string = this.baseurl + 'employeeList';
    return this.http.get(url);
  }

  addEmployee(user:Employee): Observable<any>{
    const url:string = this.baseurl + 'employeeList';
    return this.http.post(url,user);
  }

  deleteEmployee(id:number): Observable<any>{
    const url:string = this.baseurl + 'employeeList/' + id;
    return this.http.delete(url);
  }

  updateEmployee(user:Employee,id:number): Observable<any>{
    const url:string = this.baseurl + 'employeeList/' + id;
    return this.http.put(url,user);
  }
}
