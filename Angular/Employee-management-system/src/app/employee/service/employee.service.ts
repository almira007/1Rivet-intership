import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map, throwError } from 'rxjs';
import { EmployeeAdapter } from '../adapter/employee.adapter';
import { Employee } from '../Model/employee.model';


@Injectable()
export class EmployeeService {

  public baseurl: string;

  constructor(private http: HttpClient,
    private employeeadapter: EmployeeAdapter) {
    this.baseurl = "http://localhost:3000/";
  }
  /**
   * get list of employee
   * @returns employee list
   */
  public getEmployee(scroll: number, scrollNum: number): Observable<Employee[]> {
    const url: string = this.baseurl + 'employee';
    return this.http.get<Employee[]>(`${url}?_page=${scroll}&_limit=${scrollNum}`).pipe(map((item: Employee[]) => {
      return item.map((item: any) => this.employeeadapter.toConcat(item))
    }))
  }
  /**
   * Get employee by id
   * @param id get id
   * @returns employee object
   */
  public getEmployeeById(id: number): Observable<Employee> {
    const url: string = this.baseurl + 'employee/' + id;
    return this.http.get<Employee>(url);
  }
  /**
   * Add new employee
   * @param employee Get employee bosy
   * @returns employee object
   */
  public addEmployee(employee: Employee): Observable<Employee> {
    const url: string = this.baseurl + 'employee/';
    return this.http.post<Employee>(url, employee);
  }
  /**
   * Update Employee
   * @param employee get employee
   * @returns Employee object
   */
  public updateEmployee(employee: Employee): Observable<Employee> {
    const url: string = this.baseurl + 'employee/' + employee.id;
    return this.http.put<Employee>(url, employee);
  }
  /**
   * Delete employee
   * @param id get id
   * @returns 
   */
  public deleteEmployee(id: number): Observable<Employee> {
    const url: string = this.baseurl + 'employee/' + id;
    return this.http.delete<Employee>(url);
  }
}
