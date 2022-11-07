import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../Model/employee.model';

@Injectable()
export class EmployeeCommunicationService {


  public datapresent = new Subject<Employee>;

  constructor() { }


  getDataRefresh(data: Employee) {
    this.datapresent.next(data);
  }

}
