import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';


@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.scss']
})
export class SubjectExampleComponent implements OnInit {

  public subject = new Subject();
  public observer1: any
  public observer2: any

  //behavior
  public behavior = new BehaviorSubject(3);
  public behavior1: any
  public behavior2: any

  //Replaysubject
  public replay = new ReplaySubject(3);
  public replay1: any
  public replay2: any

  //Async subject
  public async = new AsyncSubject();
  public async1: any
  public async2: any
  public async3: any

  constructor() { }

  ngOnInit(): void {

    //subject
    this.observer1 = this.subject.subscribe({
      next: (v) => {
        console.log(`data A : ${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.subject.next(1)
    this.subject.next(2)

    this.observer2 = this.subject.subscribe({
      next: (v) => {
        console.log(`data B :${v} `);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.subject.next(4)
    this.subject.next(5)

    //Behavior

    console.log("Behavior subject")
    this.behavior1 = this.behavior.subscribe({
      next: (v) => {
        console.log(`data A : ${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.behavior.next(1)
    this.behavior.next(2)
    // this.subject.complete()

    this.behavior2 = this.behavior.subscribe({
      next: (v) => {
        console.log(`data B :${v} `);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.behavior.next(4)
    this.behavior.next(5)

    //Replay subject
    console.log("Replay subject")
    this.replay.next(6)
    this.replay1 = this.replay.subscribe({
      next: (v) => {
        console.log(`data A : ${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.replay.next(1)
    this.replay.next(2)

    this.replay1 = this.replay.subscribe({
      next: (v) => {
        console.log(`data B :${v} `);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.replay.next(4)
    this.replay.next(5)

    //Async subject 
    console.log("Async subject")
    this.async1 = this.async.subscribe({
      next: (v) => {
        console.log(`data A : ${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.async.next(1)
    this.async.next(2)
    this.async.complete()
    this.async.next(8)
    this.async.next(9)

    this.async2 = this.async.subscribe({
      next: (v) => {
        console.log(`data B :${v} `);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.async.next(4)
    this.async.next(5)

    this.async3 = this.async.subscribe({
      next: (v) => {
        console.log(`data c :${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })
  }

}
