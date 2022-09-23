import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee.model';
import { EmployeeDataService } from 'src/app/service/employee-data.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss']
})
export class CrudFormComponent implements OnInit {

  public EmployeeForm: FormGroup;
  public employeeData: Employee[];
  public isSubmitted: boolean;
  public id:any;
  
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
    this.employeeData = [];
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  //validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.EmployeeForm.controls;
  }

  //push the data in table
  public saveEmployee(): void {
    this.isSubmitted = true;
   
    this.employeeDataService.addEmployee(this.EmployeeForm.value).subscribe(response=>{
      this.getEmployeeData();
      console.log(response);
    });
  }

  //edit record
  public editEmployee(item: any): void {
    // this.EmployeeForm.patchValue(item)
  }

  public resetForm(): void {
    this.EmployeeForm.reset();
  }

  public getEmployeeData(): void{
     this.employeeDataService.getEmployee().subscribe( (employee:Employee[]) => {
      this.employeeData = employee;
     } );
  }
}


