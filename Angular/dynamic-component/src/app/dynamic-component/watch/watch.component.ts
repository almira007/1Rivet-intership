import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

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
