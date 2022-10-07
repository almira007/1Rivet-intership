import { Component, OnInit } from '@angular/core';
import { of,map, tap } from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';

@Component({
  selector: 'app-transformation-operators',
  templateUrl: './transformation-operators.component.html',
  styleUrls: ['./transformation-operators.component.scss']
})
export class TransformationOperatorsComponent implements OnInit {

  public status: any;

  constructor(private employeedata:EmployeeDataService) { }

  ngOnInit(): void {

    //map

    of(1,2,3,4)
    .pipe(map((ev) => ev * 10))
    .subscribe({
      next:(x)=>{
        this.employeedata.print(x,'transformation')
      },
      error:()=>{

      }
    })
      // x => console.log('value is:', x))

    //tap

    // const source = of(1,2,3,4,5);
    // source.pipe(
    //   tap(n => {
    //     if(n > 3){
    //        throw new TypeError(`value ${n} is grether than 100`)
    //     }
    //   })
    // )
    // .subscribe({
    //   next:(value)=>{
    //     this.employeedata.print(value,'transformation')
    //   },
    //   error:(err)=>{
    //     console.log('error mess',err);
    //   }
    //     //  next: value => console.log('value is:', value),
    //     //  error: err => console.log('error mess',err)    
    // })
  }

}
