import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observables-example',
  templateUrl: './observables-example.component.html',
  styleUrls: ['./observables-example.component.scss']
})
export class ObservablesExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let source$ = new Observable((observe:any)=>{
      setTimeout(()=>{
       observe.next('Hello');
       observe.next("good Morning");
      },2000);
      observe.next(10);
    });
    source$.subscribe((data)=>{
      console.log(data);
    });
    let observe = source$.subscribe({
      next:(data)=>{
        setTimeout(()=>{
          console.log(data);
         },2000);
      },
      error: (err)=>{
        console.log(err);
      },
      complete: () =>{
        console.log('Completed');
      }
    });
  }
}
