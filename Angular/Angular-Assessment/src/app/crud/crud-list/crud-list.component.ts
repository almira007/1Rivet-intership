import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Employee } from 'src/app/employee.model';
import { EmployeeDataService } from 'src/app/service/employee-data.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements OnInit {

  @Input() public employeeList: Employee[];

  @Output() public edit: EventEmitter<any>;

  constructor( private router: Router, private employeeDataService: EmployeeDataService,  public activatedRoute: ActivatedRoute,) {
    this.employeeList = [];
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
  }


  //Edit record
  public editEmployee(employee: Employee): void {
    // this.edit.emit(employee);
    this.router.navigate(['crud/edit/', employee.id]);

  }

  //getEmployee
  getEmployee() {
    this.employeeDataService.getEmployee().subscribe((result) => {
      this.employeeList = result;
    });
  }

  //Delete the record
  public deleteEmployeeData(id: any): void {
    // this.employeeList.splice(item, 1);
    this.employeeDataService.deleteEmployee(id).subscribe((result) => {
      this.getEmployee();
    });

  }

  //Details pass the object
  public detailsEmployee(item: any): void {
    this.router.navigate(['Employee/employee-details'], { queryParams: item });
  }
}
