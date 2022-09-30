import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

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
