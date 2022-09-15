import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.css']
})
export class InternFormComponent implements OnInit {

  public internForm: FormGroup;
  public isSubmitted: boolean;

  constructor(
    private formbuilder: FormBuilder
  ) {
    this.isSubmitted = false;
    /** Without FormBuilder */
    // this.internForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   age: new FormControl('', [Validators.required, Validators.pattern(/\d/)]),
    //   email: new FormControl('', [Validators.required, Validators.email])
    // });

    /** With FormBuilder */
    this.internForm = this.formbuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/\d/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.internForm);
    console.log(this.internForm.value);
  }

  get interFormControls() {
    return this?.internForm?.controls;
  }

  onSubmitClick() {
    console.log('on submit click', this.internForm.value);
  }

  onReset() {
    this.internForm.reset();
  }
}
