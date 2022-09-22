import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../form/form.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  baseurl = ' http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getEmployee() {
    const url: string = this.baseurl + 'employee';
    return this.http.get(url);
  }

  addEmployee(user: Employee) {
    const url: string = this.baseurl + 'employee';
    return this.http.post(url, user);
  }
}
