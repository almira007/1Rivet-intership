import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeCommunicationService } from '../service/employee-communication.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  @Output() public confirm: EventEmitter<boolean>;

  @Output() public cancle: EventEmitter<boolean>;

  //company form 
  public employeeForm: FormGroup;
  public employeeData: any;
  public isSubmitted: boolean;
  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService,
    private employeeCommunicationService: EmployeeCommunicationService) {
    this.confirm = new EventEmitter();
    this.cancle = new EventEmitter();

    this.employeeForm = this.fb.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', Validators.required],
      mobileNo: ['', Validators.required],
      salary: ['', Validators.required],
    });
    this.employeeData = [];
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    this.getEmployeedata();
  }

  // convenience getter for easy access to form fields
  get formValidation() { return this.employeeForm.controls; }

  public getEmployeedata() {
    this.employeeService.getEmployee().subscribe((data) => {
      this.employeeData = data;
    });
  }

  // public confirmData() {
  //   this.isSubmitted = true;
  //   if (this.employeeForm.valid) {
  //     this.isSubmitted = false;
  //     if (this.employeeForm.value.id) {
  //       this.updateEmployee();
  //     }
  //     else {
  //       this.employeeService.addEmployee(this.employeeForm.value).subscribe((result) => {
  //         console.log(result);
  //         this.employeeCommunicationService.getDataRefresh(result);
  //       });
  //       this.getEmployeedata();
  //     }
  //     this.isSubmitted = false;
  //   }
  //   this.confirm.emit(true)
  // }

  public confirmData() {
    this.isSubmitted = true;
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe((result) => {
        console.log(result);
        this.employeeCommunicationService.getDataRefresh(result);
      })
    }
  }

  public cancleData(): void {
    this.cancle.emit(true)
  }

  /**
   * Add employee data 
   * return employeeForm value using subject
   */
  public addEmployeeData() {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe((res) => {
      // this.employeeCommunicationService.getData(res);
    });
  }

  //updated record add
  public updateEmployee(): void {
    this.employeeService.updateEmployee(this.employeeForm.value).subscribe((response) => {
    });
  }
}
