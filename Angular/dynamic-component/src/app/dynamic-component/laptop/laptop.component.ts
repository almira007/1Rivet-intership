import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

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
