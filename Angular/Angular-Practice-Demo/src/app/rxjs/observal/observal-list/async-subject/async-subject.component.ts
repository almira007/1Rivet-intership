import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';


@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  
  //Async subject
  public async = new AsyncSubject();
  public async1: any
  public async2: any
  public async3: any
  public status:any;


  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit(): void {

       

    //Async subject 
    console.log("Async subject")
    this.async1 = this.async.subscribe({
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

    this.async.next(1)
    this.async.next(2)
    this.async.complete()
    this.async.next(8)
    this.async.next(9)

    this.async2 = this.async.subscribe({
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


    this.async.next(4)
    this.async.next(5)

    this.async3 = this.async.subscribe({
      next: (msg) => {
        console.log('Next Data 3: ' + msg);
        setTimeout(() => {
          this.employeeService.print(`Next 3: ${msg}`, 'elContainer')
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

  }

}
