import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  public studentForm: FormGroup;

  public studentData: any;

  public isSubmitted: boolean;

  constructor(
    private fb: FormBuilder
  ) {
    this.isSubmitted = false;
    this.studentForm = this.fb.group({
    Name:['',[Validators.required]],
    Gender:['',[Validators.required]],
    DateofBirth:['',[Validators.required]],
    Price:['',[Validators.required]],
    Description:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public saveStudent(): void {
    this.isSubmitted = true;
    if (this.studentForm.valid) {
      this.studentData = this.studentForm.value;
      this.isSubmitted = false;
      this.studentForm.reset();
    }
  }

  public editStudent(item: any): void {
    this.studentForm.patchValue(item)
  }
}
