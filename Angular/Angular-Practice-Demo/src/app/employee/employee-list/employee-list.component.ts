import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() public employeeList: any;

  @Output() public edit: EventEmitter<any>;

  constructor(private router: Router) {
    this.employeeList = [];
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    

  }


  //Edit record
  public editEmployee(item: any): void {
    this.edit.emit(item)
  }


  //Delete the record
  public deleteEmployee(item: any): void {
    this.employeeList.splice(item, 1);
  }

  //Details pass the object
  public detailsEmployee(item: any): void {
    this.router.navigate(['Employee/employee-details'], { queryParams: item });
  }
}
