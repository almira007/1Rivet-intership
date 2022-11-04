import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee.model';

@Injectable()
export class EmployeeService {

  public baseurl: string;

  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }

  /**
   * get list of employee
   * @returns employee list
   */
  public getEmployee(): Observable<Employee[]> {
    const url: string = this.baseurl + 'employee';
    return this.http.get<Employee[]>(url);
  }


  /**
   * Add new employee
   * @param company Get employee bosy
   * @returns employee object
   */
  public addEmployee(employee: Employee): Observable<Employee> {
    const url: string = this.baseurl + 'employee';
    return this.http.post<Employee>(url, employee);
  }
}
