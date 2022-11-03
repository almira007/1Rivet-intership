import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/service/dialog.service';
import { RegistrationService } from '../registration.service';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private dialog: DialogService
  ) {
    this.loginForm = new FormGroup('');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{8}')]]
    })
  }

  public onLogin() {
    if (this.loginForm.controls['email'].value == 'admin@gmail.com' && this.loginForm.controls['password'].value == 'admin123') {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('role', 'admin');
      this.router.navigateByUrl('admin')
    }
    else {
      this.registrationService.getUser().subscribe((res) => {
        let user = res.find((data) => data.emailId === this.loginForm.controls['email'].value && data.password === this.loginForm.controls['password'].value);
        if (user) {
          localStorage.setItem('isAuthenticated', 'true')
          localStorage.setItem('user', JSON.stringify(user))
          this.router.navigateByUrl('contact');
        }
        else {
          alert("Invalid Username or Password");
          this.router.navigateByUrl('registration');
          // this.dialog.openDialog(RegistrationComponent)
        }
      })
    }

  }
  public openRegister() {
    this.dialog.openDialog(RegistrationComponent);
  }
}
