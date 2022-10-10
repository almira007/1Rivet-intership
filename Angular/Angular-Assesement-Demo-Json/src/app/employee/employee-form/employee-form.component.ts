import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee/employee.model';
import { EmployeeServiceService } from '../service/employee-service.service';
import { ToasterService } from '../service/toaster.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public updateEmployees: Employee[];
  public employeeForm: FormGroup;
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
    private notification: ToasterService,
    private fb: FormBuilder,
    private employeeDataService: EmployeeServiceService,
    private route: ActivatedRoute,
  ) {

    this.isSubmitted = false;
    this.employeeForm = this.fb.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.onlyCharecter)]],
      gender: ['', [Validators.required, Validators.pattern(this.onlyalphabets)]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern(this.onlynumber)]],
    });
    this.employeeData = [];
    this.updateEmployees=[];
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      // if (this.id) {
      //   this.getEmployeeById()
      // }
    });
  }
  //validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  ngOnInit(): void {

  }
  public saveEmployee(): void {
    this.isSubmitted = true;
    if (this.employeeForm.valid) {
      this.isSubmitted = false;
      if (this.id) {
        this.updateEmployee();
      }
      else {
        this.employeeDataService.postEmployee(this.employeeForm.value).subscribe(response => {
          this.notification.showSuccess("Data shown successfully !!", "Data Add sucessfully")
          console.log(response);
        });
        // this.getEmployee()
      }
      // this.isSubmitted = false;
      // this.employeeForm.reset();
    }
  }

  public resetForm(): void {
    this.isSubmitted = false;
    this.employeeForm.reset();
  }

  // public getEmployee(): void {
  //   this.employeeDataService.getEmployee().subscribe((employee) => {
  //     this.employeeData = employee;
  //   });
  // }

  public updateEmployee(): void {
    this.employeeDataService.updateEmployee(this.employeeForm.value, this.id).subscribe((response) => {
      // this.getEmployee();
      console.log(response);
      
    });
  }

  //edit record
  public editEmployee(employee: Employee) {
    this.employeeForm.patchValue(employee)
    console.log(employee);
  }
}
