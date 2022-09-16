import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public title:string;
  public customerid:number;
  // public btn:string;

  constructor(private router:Router,
    private activaterouter:ActivatedRoute) 
    { 
       this.customerid=this.activaterouter.snapshot.params['customerid'];
       this.title='Add Customer';
       this.title=this.customerid? 'Edit Customer' : 'Add Customer';
      //  this.btn=this.customerid? 'Edit':'Add';

  }

  ngOnInit(): void {

    console.log(this.activaterouter.snapshot.params['customerid']);
  }
 
  public Save(){
    this.router.navigate(['customers','list']);
    this.router.navigate(['/Save'], { queryParams: { message: 'hello' } });  

  }

}
