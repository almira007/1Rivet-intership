import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.scss']
})
export class FormGroupExampleComponent implements OnInit {

  public userForm: FormGroup;
  public isSubmitted: boolean;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.isSubmitted=false;
    this.userForm = this.formBuilder.group({
      firstName: ['',[Validators.required,Validators.minLength(5)]],
      userName: ['',[Validators.required,Validators.maxLength(5)]],
      contectNo: ['',[Validators.pattern('^[0-9]*$')]],
      age: ['',[Validators.required,Validators.min(18), Validators.max(60)]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        state: [''],
        zipCode: ['']
      }),
      terms: [null, [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  
  get formValidation(): { [key: string]: AbstractControl} {
    return this.userForm.controls;
  }
  public saveForm(): void{
    this.isSubmitted = true;
    console.log(this.userForm.value);
  }
  public reset(): void {
    this.userForm.reset();
  }
}
