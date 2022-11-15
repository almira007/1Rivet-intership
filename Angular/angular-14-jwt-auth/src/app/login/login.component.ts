import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  // returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {

    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
    // this.returnUrl = '';

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^(?=.*?[_.]).*([a-z0-9])+@([a-z\-]{2,}\.)+[a-z\-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!&/\\\[\](\){\}_])[A-Za-z\d@$!&/\\\[\](\){\}_]{0,}$/)]],
    });
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  public onSubmit() {
    this.submitted = true;

    this.authenticationService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe((data) => {
      this.router.navigateByUrl("home");
    });
  }

}
