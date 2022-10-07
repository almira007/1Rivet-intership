import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, fromEvent, interval, of, takeUntil } from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';

@Component({
  selector: 'app-filtering-operators',
  templateUrl: './filtering-operators.component.html',
  styleUrls: ['./filtering-operators.component.scss']
})
export class FilteringOperatorsComponent implements OnInit {

  public status: any;

  constructor(private employeedata:EmployeeDataService) { }

  ngOnInit(): void {

    //filter
    of(0,1,2,3,4)
    .pipe(filter(x => x % 2 === 1))
    .subscribe({
      next:(x)=>{
        this.employeedata.print(x,'Filtering')
      },
      error:()=>{

      }
    })
      // x => console.log('value is:',x))

    //TackeUnit

    // const source = interval(1000);
    // const clicks = fromEvent(document,'click');
    // const result = source.pipe(takeUntil(clicks));
    // result.subscribe({
    //   next:(x)=>{
    //     this.employeedata.print(x,'Filtering')
    //   },
    //   error:()=>{

    //   }
    // })
      // x => console.log('value is:',x))

    //debounce Time
    // const e1 = document.getElementsByTagName('input');
    // const clicks = fromEvent(e1,'keydown');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe(x => console.log('value is:',x))
  }

}
