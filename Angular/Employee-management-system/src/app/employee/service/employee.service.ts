import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from '../Model/employee.model';

@Injectable()
export class EmployeeService {

  public baseurl: string;

  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";



  }

  public httpOptions = {
    headers: new HttpHeaders({
      'Authorization': '563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692'
    })
  }
  /**
   * get list of employee
   * @returns employee list
   */
  public getEmployee(): Observable<Employee[]> {
    const url: string = this.baseurl + 'employee';
    return this.http.get<Employee[]>(`${url}`);
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
    const url: string = this.baseurl + 'employee';
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

  getDataScroll(search: any, perPage: any) {
    const url = "http://localhost:3000//search?query=" + search + "&per_page=" + perPage;
    return this.http.get<any>(url, this.httpOptions).pipe(catchError(this.handelError));
  }
  handelError(error: any) {
    return throwError(error.message || "Server Error");
  }
}
