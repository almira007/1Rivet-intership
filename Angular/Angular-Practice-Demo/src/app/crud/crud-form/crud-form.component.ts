import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public id: any;
  public title: any;


  //only charecter patten
  private onlyCharecter: string = '^[A-Za-z\s]+$';
  //Only alphabets patten
  private onlyalphabets: string = '^[a-zA-Z \-\']+';
  //only number patten
  private onlynumber: string = '^[0-9]*$';

  constructor(
    private fb: FormBuilder,
    private employeeDataService: EmployeeDataService,
    private route: ActivatedRoute

  ) {
    // this.id=this.route.snapshot.params['id'];


    this.isSubmitted = false;
    this.EmployeeForm = this.fb.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.onlyCharecter)]],
      gender: ['', [Validators.required, Validators.pattern(this.onlyalphabets)]],
      dob: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern(this.onlynumber)]],
    });
    this.employeeData = [];

    // this.id = this.route.snapshot.params['id'];
    // this.getEmployeeById();
    // this.getEmployee();
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.getEmployeeById()
      }

    });


  }

  ngOnInit(): void {
    this.getEmployee();

    //add and edit
    this.title = 'Add';
    this.title = this.id ? 'Edit ' : 'Add ';

  }

  //validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.EmployeeForm.controls;
  }

  //push the data in table
  public saveEmployee(): void {
    this.isSubmitted = true;
    if (this.EmployeeForm.valid) {
      this.isSubmitted = false;
      if (this.id) {
        this.updateEmployee();
      }
      else {
        this.employeeDataService.addEmployee(this.EmployeeForm.value).subscribe(response => {
          this.getEmployee();
          console.log(response);
        });
        // console.log(this.employeeData);
      }
      this.isSubmitted = false;
      this.EmployeeForm.reset();
    }
  }


  public resetForm(): void {
    this.EmployeeForm.reset();
  }

  public getEmployee(): void {
    this.employeeDataService.getEmployee().subscribe((employee: Employee[]) => {
      this.employeeData = employee;
    });
  }

  public updateEmployee(): void {
    this.employeeDataService.updateEmployee(this.EmployeeForm.value, this.id).subscribe((response) => {
      this.getEmployee();
    });
  }

  private getEmployeeById(): void {
    this.employeeDataService.getEmployeeById(Number(this.id)).subscribe((employee: Employee) => {
      this.EmployeeForm.patchValue(employee);
    });
  }
  public editEmployee(employee: Employee): void {

  }
}


