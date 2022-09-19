import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html',
  styleUrls: ['./form-control-example.component.scss']
})
export class FormControlExampleComponent implements OnInit {

  public userForm: FormGroup;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

}
