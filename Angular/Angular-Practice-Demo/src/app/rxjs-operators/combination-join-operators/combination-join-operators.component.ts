import { Component, OnInit } from '@angular/core';
import { concat, forkJoin, interval, map, merge, of, take, timeInterval, timer } from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-combination-join-operators',
  templateUrl: './combination-join-operators.component.html',
  styleUrls: ['./combination-join-operators.component.scss']
})
export class CombinationJoinOperatorsComponent implements OnInit {

  public status: any;

  constructor(private employeedata:EmployeeDataService) { }

  ngOnInit(): void {
    //Concat

    let list1 = of(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);
    let list2 = of(1, 3, 5, 7, 9, 11, 13, 15, 17, 19);
    concat(list1, list2).subscribe({
     next:(data)=>{
      this.employeedata.print(data,'combination');
     },
     error:()=>{
      
     }
      // console.log(data)
    })

    // Merge

  //   let stud1 = of('a', 'b', 'c');
  //  // let stud2 = interval(3000);
  //   let stud3=of(100,200,300)
  //   merge(stud1,stud3).subscribe((data) => {
  //     console.log(data);
  //   })




   // ForkJoin
    // const observable = forkJoin({
    //   foo : of(1,2,3,4),
    //   bar : Promise.resolve(8),
    //   baz : timer(5000)
    // });
    // observable.subscribe({
    //   next: value => 
    //   console.log(value),
    //   complete: () => console.log('comepele')
    // });
  }

}
