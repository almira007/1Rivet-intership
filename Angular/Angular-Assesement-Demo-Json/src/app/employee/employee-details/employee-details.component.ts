import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeServiceService } from '../service/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeedata: Employee;
  public id:string;
  constructor(
    private employeeDataService: EmployeeServiceService,
    private activateroute:ActivatedRoute
  ) { 

    this.employeedata = new Employee();
    this.id ='';
    this.activateroute.params.subscribe(params=>{
      this.id = params['id'];
      this.getEmployeeById();
    })
    
  }

  ngOnInit(): void {
  }

  public getEmployeeById(): void{
    this.employeeDataService.getEmployeeById(Number(this.id)).subscribe((employee:Employee)=>{
      this.employeedata = employee;
    })
  }
}
