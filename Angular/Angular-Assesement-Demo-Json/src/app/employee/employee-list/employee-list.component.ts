import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() public employeeList: Employee[];

  @Output() public edit: EventEmitter<any>;

  constructor(private router:Router,
    private employeeDataService:EmployeeServiceService) {
    this.employeeList =[];
    this.edit = new EventEmitter();
   }

  ngOnInit(): void {
  }

  //getEmployee
  getEmployee() {
    this.employeeDataService.getEmployee().subscribe((result) => {
      this.employeeList = result;
    });
  }

  public editEmployee(employee:Employee): void{
    this.router.navigate(['employee/edit/', employee.id]);


  }
  public deleteEmployeeData(id:any): void{
    this.employeeDataService.deleteEmployee(id).subscribe((result)=>{
     this.getEmployee();
    });

  }
  public detailsEmployee(): void{

  }
}
