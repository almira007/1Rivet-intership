import { Component, OnInit } from '@angular/core';
import {  ReplaySubject} from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';


@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  
  //Replaysubject
  public replay = new ReplaySubject(3);
  public replay1: any
  public replay2: any
  public status:any;

  constructor(private employeeService: EmployeeDataService) { }

  ngOnInit(): void {
     //Replay subject
     console.log("Replay subject")
    //  this.replay.next(6)
     this.replay1 = this.replay.subscribe({
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

    this.replay.next(1)
    this.replay.next(2)
    this.replay.next(3)
    this.replay.next(4)
    this.replay.complete()


    this.replay2 = this.replay.subscribe({
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


    this.replay.next(5)
    this.replay.next(7)

  }

}
