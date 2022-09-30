import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ovan',
  templateUrl: './ovan.component.html',
  styleUrls: ['./ovan.component.scss']
})
export class OvanComponent implements OnInit {

  @Input() name: string = '';
 
  @Output() closed = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  close(): void{
    this.closed.emit({
      name : this.name,
    });
  }
}
