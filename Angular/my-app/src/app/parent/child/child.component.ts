import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  /** used to receive data from parent - Parent to Child Communication */
  @Input() public ChildList: string;

  /** used to emit event from child - Child to Parent Communication */
  @Output() public ParentList: EventEmitter<string>;

  constructor() {
    this.ChildList = '';
    this.ParentList = new EventEmitter<string>;
  }

  ngOnInit() {
    console.log(this.ChildList);
  }

  public addNew(val: string) {
    this.ParentList.emit(val);
  }

}
