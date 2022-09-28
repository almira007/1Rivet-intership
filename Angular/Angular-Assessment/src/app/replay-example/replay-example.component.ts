import { Component, OnInit } from '@angular/core';
import {  ReplaySubject} from 'rxjs';


@Component({
  selector: 'app-replay-example',
  templateUrl: './replay-example.component.html',
  styleUrls: ['./replay-example.component.scss']
})
export class ReplayExampleComponent implements OnInit {

  
  //Replaysubject
  public replay = new ReplaySubject(3);
  public replay1: any
  public replay2: any
  constructor() { }

  ngOnInit(): void {
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
  }

}
