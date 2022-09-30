import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';


@Component({
  selector: 'app-async-example',
  templateUrl: './async-example.component.html',
  styleUrls: ['./async-example.component.scss']
})
export class AsyncExampleComponent implements OnInit {

  
  //Async subject
  public async = new AsyncSubject();
  public async1: any
  public async2: any
  public async3: any

  constructor() { }

  ngOnInit(): void {

       

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
