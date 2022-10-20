import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { Users } from '../model/user.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  public loginForm: FormGroup;
  public isSubmitted: boolean;
 public dataList: Users[]; 

  constructor( private fb: FormBuilder,
    private authGuard:AuthGuardService) { 
    this.isSubmitted = false
    this.dataList = [];
    this.loginForm = this.fb.group({
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
    return this.loginForm.controls;
  }
  public saveuserData():void{
    this.isSubmitted = true;
    if(this.loginForm.valid){
     this.isSubmitted = false;
     if(this.loginForm.value.id){
       console.log(this.loginForm.value)
     }
     else{
       this.adduserData();
     }
     this.isSubmitted = false;
    }
   }
 
   
   //getUserData data
   public getuserData(): void {
     this.authGuard.getuserData().subscribe((res) => {
     this.dataList = res;
     });
   }
 
   //post data
   public adduserData(): void{
    this.authGuard.adduserData(this.loginForm.value).subscribe( response => {
    });
   }
}
