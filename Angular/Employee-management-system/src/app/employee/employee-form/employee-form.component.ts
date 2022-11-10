import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  public isAddMode: boolean;
  private id!: string;


  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService,
    private employeeCommunicationService: EmployeeCommunicationService,
    private route: ActivatedRoute,) {
    this.confirm = new EventEmitter();
    this.cancle = new EventEmitter();

    this.employeeForm = this.fb.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fullName: [''],
      emailId: ['', Validators.required],
      mobileNo: ['', Validators.required],
      salary: ['', Validators.required],
    });
    this.employeeData = [];
    this.isSubmitted = false;
    this.isAddMode = true;

  }

  ngOnInit(): void {
    // this.getEmployeedata();
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  }

  // convenience getter for easy access to form fields
  get formValidation() { return this.employeeForm.controls; }

  // public getEmployeedata() {
  //   this.employeeService.getEmployee().subscribe((data) => {
  //     this.employeeData = data;
  //   });
  // }


  public confirmData() {
    this.isSubmitted = true;
    if (this.employeeForm.valid) {
      if (this.employeeForm.value.id) {
        this.updateEmployeeData();
      }
      else {
        this.employeeService.addEmployee(this.employeeForm.value).subscribe((result) => {
          console.log(result);
          this.employeeCommunicationService.getDataRefresh(result);
        });
        this.confirm.emit(true);
      }
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
  public updateEmployeeData(): void {
    this.employeeService.updateEmployee(this.employeeForm.value).subscribe((response) => {
      this.employeeCommunicationService.getDataRefresh(response);
    });
  }
}
