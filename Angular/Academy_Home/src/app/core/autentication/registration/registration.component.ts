import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService) { 
    this.registrationForm = new FormGroup('');
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        firstname: [''],
        lastname: [''],
        emailId: [''],
        password: ['']
      }
    )
  }
  
  public onRegister(){
    if (this.registrationForm.valid) {
      this.registrationService.AddUser(this.registrationForm.value).subscribe((res) => {
      });
    }
    this.router.navigateByUrl("login");
  }
}
