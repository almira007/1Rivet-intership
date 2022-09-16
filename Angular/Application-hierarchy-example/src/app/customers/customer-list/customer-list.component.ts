import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customer:any=[];
  constructor(private router:Router) {
    this.customer=[
      {
        id:1,
        Email:'almira@gmail.com',
        Password:'almira123'
      },
      {
        id:2,
        Email:'pooja@gmail.com',
        Password:'pooja123'
      },
      {
        id:3,
        Email:'hemi@gmail.com',
        Password:'hemi123'
      },
      {
        id:4,
        Email:'heni@gmail.com',
        Password:'heni123'
      },
    ]
   }

  ngOnInit(): void {
  }

  // public edit(){
  //   this.router.navigate(['/edit'], { queryParams: { this.customer} });  

  // }
}
