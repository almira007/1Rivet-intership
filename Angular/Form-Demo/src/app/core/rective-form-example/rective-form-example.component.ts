import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-rective-form-example',
  templateUrl: './rective-form-example.component.html',
  styleUrls: ['./rective-form-example.component.scss']
})
export class RectiveFormExampleComponent implements OnInit {

  public userFormData: FormGroup;
  public isSubmitted: boolean;
  private onlyCharecter: string = '^[A-Za-z\s]+$';
  
  constructor(private fb: FormBuilder) { 
    this.isSubmitted=false;
    this.userFormData = this.fb.group({
     firstName: ['',[Validators.required, Validators.minLength(5), Validators.pattern(this.onlyCharecter)]],
     lastName:  ['',[Validators.required, Validators.maxLength(5)]],
     contectNo: ['', [Validators.pattern('^[0-9]*$')]],
     email:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  
  get formValidation(): { [key: string]: AbstractControl } {
    return this.userFormData.controls;
  }


  public saveForm(): void {
    this.isSubmitted = true;
    console.log(this.userFormData.value);
  }

  public reset(): void {
    this.userFormData.reset();
  }
}
