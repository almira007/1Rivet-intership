import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { EmployeeDataService } from 'src/app/service/employee-data.service';

@Component({
  selector: 'app-crud-details',
  templateUrl: './crud-details.component.html',
  styleUrls: ['./crud-details.component.scss']
})
export class CrudDetailsComponent implements OnInit {

  public employeedata: Employee;
  public id:string;

  constructor(
    private employeeService: EmployeeDataService,
    private route: ActivatedRoute) { 

      this.employeedata = new Employee();
      this.id='';
      this.route.params.subscribe(params=>{
        this.id = params['id'];
        this.getEmployee();
      });
    }

  ngOnInit(): void {
  }
  
  public getEmployee(){
    this.employeeService.getEmployeeById(Number(this.id)).subscribe((employee:Employee)=>{
      this.employeedata = employee;
    })
  }
}
