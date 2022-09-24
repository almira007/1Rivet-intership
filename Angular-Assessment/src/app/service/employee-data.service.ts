import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Employee } from '../employee.model';


@Injectable()
export class EmployeeDataService {

  public baseurl:any;
  constructor(private http:HttpClient) { 
    this.baseurl = "http://localhost:3000/";
  }

  getEmployee(): Observable<any>{
    const url:string = this.baseurl + 'employeeData';
    return this.http.get(url);
  }

  getEmployeeById(id: number): Observable<any> {
    const url: string = this.baseurl + 'employeeData/'+id;
    return this.http.get(url);
  }
  addEmployee(user:Employee):Observable<any>{
    const url:string= this.baseurl + 'employeeData';
    return this.http.post(url,user);
  }

  deleteEmployee(id:number):Observable<any>{
    const url:string= this.baseurl + 'employeeData/' + id;
    return this.http.delete(url);
  }

  updateEmployee(user:Employee,id:number):Observable<any>{
    const url:string= this.baseurl + 'employeeData/' + id;
    return this.http.put(url,user);
  }
}
