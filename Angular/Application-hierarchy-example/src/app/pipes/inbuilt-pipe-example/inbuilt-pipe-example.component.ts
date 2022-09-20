import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe-example',
  templateUrl: './inbuilt-pipe-example.component.html',
  styleUrls: ['./inbuilt-pipe-example.component.scss']
})
export class InbuiltPipeExampleComponent implements OnInit {

  todayDate : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
