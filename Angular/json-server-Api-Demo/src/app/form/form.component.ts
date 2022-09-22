import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // public employeeForm:FormGroup;
  public employeeData: any;

  constructor(
    private employeeServices: UserDataService
  ) {

  }

  ngOnInit(): void {

    this.employeeServices.getEmployee().subscribe((employee: any) => {
      this.employeeData = employee;
    })
  }

  public onSubmit(data: any): void {
    this.employeeServices.addEmployee(data.value).subscribe((response: any) => {
      console.log(response);
    });
  }
}
