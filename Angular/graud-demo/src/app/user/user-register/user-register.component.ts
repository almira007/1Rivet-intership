import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { Users } from '../model/user.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public isSubmitted: boolean;
  public dataList: Users[]; 
  public loading = false;

  constructor( private fb: FormBuilder,
    private authGuard:AuthGuardService,
    private router: Router,
    ) { 
    this.isSubmitted = false
    this.dataList = [];
    this.registerForm = this.fb.group({
      id: [],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  
  //Validation function
  get formValidation(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  public saveuserData():void{
    this.isSubmitted = true;
    // if(this.loginForm.valid){
    //  this.isSubmitted = false;
    //  if(this.loginForm.value.id){
    //    console.log(this.loginForm.value)
    //  }
    //  else{
    //    this.adduserData();
    //  }
    //  this.isSubmitted = false;
    // }
    if(this.registerForm.invalid){
      return;
    }

    this.loading = true;
    this.authGuard.addRegisterData(this.registerForm.value)
    .subscribe
    ((data: any) => {
     
    });
   }
 
   
   //getUserData data
   public getuserData(): void {
     this.authGuard.getLoginData().subscribe((res) => {
     this.dataList = res;
     });
   }
 
   //post data
   public adduserData(): void{
    this.authGuard.addRegisterData(this.loginForm.value).subscribe( response => {
    });
   }
}
