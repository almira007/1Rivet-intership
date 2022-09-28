import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-behavior-example',
  templateUrl: './behavior-example.component.html',
  styleUrls: ['./behavior-example.component.scss']
})
export class BehaviorExampleComponent implements OnInit {

  //behavior
  public behavior = new BehaviorSubject(0);
  public behavior1: any
  public behavior2: any
  constructor() { }

  ngOnInit(): void {
    
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

  }

}
