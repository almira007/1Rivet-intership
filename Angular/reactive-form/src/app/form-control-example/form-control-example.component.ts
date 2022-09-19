import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html',
  styleUrls: ['./form-control-example.component.scss']
})
export class FormControlExampleComponent implements OnInit {

  public userForm : FormGroup;
  constructor() { 
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('')

    });
  }

  ngOnInit(): void {
  }

  get formValidation(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
  
  public onSubmit(): void {
    console.log(this.userForm.value);
  }
}
