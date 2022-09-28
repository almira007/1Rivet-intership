import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.scss']
})
export class SubjectExampleComponent implements OnInit {

  public subject = new Subject();
  public observer1: any
  public observer2: any



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


  }

}
