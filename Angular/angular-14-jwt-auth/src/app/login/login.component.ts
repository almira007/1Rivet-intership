import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from '../model/user.model';
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
    private router: Router,
    private authService: AuthService) {

    /**
     * login form validation
     * @author Almira shaikh
     * @description login form validation 
     * @param 
     */
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^(?=.*?[_.]).*([a-z0-9])+@([a-z\-]{2,}\.)+[a-z\-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!&/\\\[\](\){\}_])[A-Za-z\d@$!&/\\\[\](\){\}_]{0,}$/)]],
    });
  }

  ngOnInit(): void {

  }


  /**
   * Function for onsubmit
   * @author Almira Shaikh
   * @description store the data in localstorage in loginForm
   * @param 
   */
  public onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res: string) => {
          localStorage.setItem('user', res);
          this.router.navigateByUrl("home");
        },
        error: () => {

        }
      });

    }
  }
}
