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
    private fb: FormBuilder,
    private employeeDataService: EmployeeServiceService,
    private route: ActivatedRoute
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
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id){
        this.getEmployeeById()
      }
      
    });
  }


  //validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  ngOnInit(): void {
    this.getEmployee();

  }
  public saveEmployee(): void {
    this.isSubmitted = true;
    if (this.employeeForm.valid) {
      // this.isSubmitted = false;
      if(this.id){
        this.updateEmployee();
      }
    }
    else {
      this.employeeDataService.addEmployee(this.employeeForm.value).subscribe(response => {
        this.getEmployee();
        console.log(response);
      });
      // this.isSubmitted = false;
      this.employeeForm.reset();
    }
  }

  public resetForm(): void {
    this.employeeForm.reset();
  }

  public getEmployee(): void {
    this.employeeDataService.getEmployee().subscribe((employee: Employee[]) => {
      this.employeeData = employee;
    });
  }

  
  public updateEmployee(): void {
    this.employeeDataService.updateEmployee(this.employeeForm.value, this.id).subscribe((response) => {
      this.getEmployee();
    });
  }

  public getEmployeeById(): void{
    this.employeeDataService.getEmployeeById(Number(this.id)).subscribe((employee: Employee) => {
      this.employeeForm.patchValue(employee);
    });
  }
}
