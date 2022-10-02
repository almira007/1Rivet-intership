import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';


@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  //behavior
  public behavior = new BehaviorSubject(0);
  public behavior1: any
  public behavior2: any
  public status: any;

  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit(): void {

    //Behavior

    console.log("Behavior subject")
    this.behavior1 = this.behavior.subscribe({
      next: (msg) => {
        console.log('Next Data 1: ' + msg);
        setTimeout(() => {
          this.employeeService.print(`Next 1: ${msg}`, 'elContainer')
        }, 1000);

      },
      error: (err) => {
        console.log(err);
        this.status = 'error'
      },
      complete: () => {
        console.log("complete")
        setTimeout(() => {
          this.status = 'complete'
        }, 2000);
      }
    })

    this.behavior.next(1)
    this.behavior.next(2)
    this.behavior.complete()
    this.behavior.next(8)
    this.behavior.next(9)

    this.behavior2 = this.behavior.subscribe({
      next: (msg) => {
        console.log('Next Data 2: ' + msg);
        setTimeout(() => {
          this.employeeService.print(`Next 2: ${msg}`, 'elContainer')
        }, 1000);

      },
      error: (err) => {
        console.log(err);
        this.status = 'error'
      },
      complete: () => {
        console.log("complete")
        setTimeout(() => {
          this.status = 'complete'
        }, 2000);
      }
    })


    this.behavior.next(4)
    this.behavior.next(5)

  }

}
