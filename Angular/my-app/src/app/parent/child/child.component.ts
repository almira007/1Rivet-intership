import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  //Parent to pass Data Child
  @Input() myinput = '';

  //Child to pass Data Parent
  @Output() newOutputEvent = new EventEmitter<string>();
  constructor() { }

  addNewArtist(val: string) {
    this.newOutputEvent.emit(val);
  }

  ngOnInit() {  

    console.log(this.myinput); 

    }  
  
}
