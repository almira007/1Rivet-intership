import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/users.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  @ViewChild ('userForm') userForm!:NgForm;
  public user:User;
  public isSubmitted:boolean;
  public title:string;
  public customerid:number;
  // public btn:string;

  constructor(private router:Router,
    private activaterouter:ActivatedRoute) 
    { 
       this.customerid=this.activaterouter.snapshot.params['customerid'];
       this.title='Add Customer';
       this.title=this.customerid? 'Edit Customer' : 'Add Customer';

      //Template driven form data
      this.user = new User();
      this.isSubmitted=false;

  }

  ngOnInit(): void {

    console.log(this.activaterouter.snapshot.params['customerid']);
  }
 
  public Submit(){
    this.router.navigate(['customers']);

    //form data show in console
    this.isSubmitted=true;
    console.log(this.userForm.form.value);

    // this.router.navigate(['/Save'], { queryParams: { message: 'hello' } });  

  }

  
}
