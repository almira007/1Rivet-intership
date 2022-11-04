import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private employeeService: EmployeeService) {
    this.confirm = new EventEmitter();
    this.cancle = new EventEmitter();

    this.employeeForm = this.fb.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: [''],
      emailId: [''],
      mobileNo: [''],
      salary: [''],
    });
    this.employeeData = [];
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    this.getEmployeedata();
  }

  public getEmployeedata() {
    this.employeeService.getEmployee().subscribe((data) => {
      this.employeeData = data;
    });
  }

  // public confirmData(): void {
  //   this.confirm.emit(true);
  //   if (this.employeeForm.valid) {
  //     if (this.employeeForm.valid) {
  //       console.log(this.employeeForm.value);

  //     }
  //     else {
  //       this.addEmployeeData();
  //       this.getEmployeedata();
  //     }
  //   }

  // }
  public confirmData(): void {
    // this.confirm.emit(true);
    if (this.employeeForm.valid) {
      this.isSubmitted = true;
      this.employeeService.addEmployee(this.employeeForm.value).subscribe((result) => {
        console.log(result);
        // alert("suucess")
      });
      this.getEmployeedata();
    }
    else {
      alert("Plzzz entered the data")
    }
  }

  public cancleData(): void {
    this.cancle.emit(true)
  }

  /**
   * Add cemployeedata 
   * return employeeForm value using subject
   */
  public addEmployeeData() {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe((res) => {

    });
  }
}
