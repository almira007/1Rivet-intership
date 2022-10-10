import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee.model';
import { EmployeeDataService } from 'src/app/service/employee-data.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public EmployeeForm: FormGroup;
  public employeeData: Employee[];
  public isSubmitted: boolean;

  //only charecter patten
  private onlyCharecter: string = '^[A-Za-z\s]+$';
  //Only alphabets patten
  private onlyalphabets: string = '^[a-zA-Z \-\']+';
  //only number patten
  private onlynumber: string = '^[0-9]*$';

  constructor(
    private fb: FormBuilder,private employeeDataService:EmployeeDataService
    ) {
    this.isSubmitted = false;
    this.EmployeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.onlyCharecter)]],
      gender: ['', [Validators.required, Validators.pattern(this.onlyalphabets)]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern(this.onlynumber)]]
    });
    this.employeeData = [
      {
        name:'Almira',
        gender: 'Female',
        dob: '09-09-2022',
        salary: '12000'
      },
      {
        name:'charvi',
        gender: 'Female',
        dob: '12-08-2022',
        salary: '12000'
      }
    ];
  }

  ngOnInit(): void {
    
  }

  //validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.EmployeeForm.controls;
  }

  //push the data in table
  public saveEmployee(): void {
    this.isSubmitted = true;
    if (this.EmployeeForm.valid) {
      this.employeeData.push({
        name: this.EmployeeForm.controls['name'].value,
        gender: this.EmployeeForm.controls['gender'].value,
        dob: this.EmployeeForm.controls['dob'].value,
        salary: this.EmployeeForm.controls['salary'].value
      });
      this.isSubmitted = false;
      this.EmployeeForm.reset();
    }
  }

  //edit record
  public editEmployee(item: any): void {
    this.EmployeeForm.patchValue(item)
  }

  public resetForm(): void {
    this.EmployeeForm.reset();
  }
}

