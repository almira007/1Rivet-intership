import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, of, take } from 'rxjs';


@Component({
  selector: 'app-creation-observables',
  templateUrl: './creation-observables.component.html',
  styleUrls: ['./creation-observables.component.scss']
})
export class CreationObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //of
    // of(1,2,3)
    // .pipe(map((x) => x * x))
    // .subscribe({
    //   next: (value) =>{
    //     console.log('value is:',value)
    //   }
    // });

    //formEvent
    // let button1 = document.getElementsByTagName('button');
    // const clickindiv = fromEvent(button1,'click');
    // clickindiv.subscribe((data)=>{
    //    console.log('value is:',data);
       
    // });
    

    //Interval
    const number = interval(2000);
    const tanumb = number.pipe(take(4));
    tanumb.subscribe(x =>{
      console.log('value is:',x);
    });


    //Combination
    
  }

}
