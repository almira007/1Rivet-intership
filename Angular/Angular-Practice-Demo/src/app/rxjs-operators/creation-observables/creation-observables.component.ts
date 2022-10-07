import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, of, take } from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';


@Component({
  selector: 'app-creation-observables',
  templateUrl: './creation-observables.component.html',
  styleUrls: ['./creation-observables.component.scss']
})
export class CreationObservablesComponent implements OnInit {

  public status: any;
  public list: any
  constructor(private employeedata: EmployeeDataService) { }

  ngOnInit(): void {

    //of
    of(1,2,3)
    .pipe(map((x) => x * x))
    .subscribe({
      next: (value) =>{
        this.employeedata.print(value,'creation')
        // console.log('value is:',value)
      },
      error:()=>{
        
      }
    });

    //formEvent
    // let button1 = document.getElementsByTagName('button');
    // const clickindiv = fromEvent(button1,'click');
    // clickindiv.subscribe({
    //   next:(data) =>{
    //     //  this.list=('video'+data) 
    //     // this.employeedata.print(this.list,'creation')
    //    console.log('value is:',data);   
    //   },
    //   error:()=>{
    //   }
    // });



    //Interval
    // const number = interval(2000);
    // const tanumb = number.pipe(take(4));
    // tanumb.subscribe({
    //   next:(value)=>{
    //     this.employeedata.print(value,'creation')
    //   },
    //   error:()=>{

    //   } 
    // });


    //Combination

  }

}
