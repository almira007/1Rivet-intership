import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee/employee.model';
import { EmployeeServiceService } from '../service/employee-service.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public EmployeeForm: FormGroup;
  public employeeData: Employee[];
  public isSubmitted: boolean;
  public id: any;


  //only charecter patten
  private onlyCharecter: string = '^[A-Za-z\s]+$';
  //Only alphabets patten
  private onlyalphabets: string = '^[a-zA-Z \-\']+';
  //only number patten
  private onlynumber: string = '^[0-9]*$';
  constructor(
    private fb: FormBuilder,
    private employeeDataService: EmployeeServiceService,
    private route: ActivatedRoute
  ) {

    this.isSubmitted = false;
    this.EmployeeForm = this.fb.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.onlyCharecter)]],
      gender: ['', [Validators.required, Validators.pattern(this.onlyalphabets)]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern(this.onlynumber)]],
    });
    this.employeeData = [];
  }

  
  //validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.EmployeeForm.controls;
  }
  
  ngOnInit(): void {
    // this.getEmployee();

  }

  public saveEmployee(): void {
    this.isSubmitted = true;
  }

  public resetForm(): void {
    this.EmployeeForm.reset();
  }
  
  public getEmployee(): void {
    this.employeeDataService.getEmployee().subscribe((employee: Employee[]) => {
      this.employeeData = employee;
    });
  }
}
