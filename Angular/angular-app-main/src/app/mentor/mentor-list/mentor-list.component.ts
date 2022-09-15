import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  @Input() public userList: any;

  @Output() public add: EventEmitter<any>;

  public name: string;
  public imgSrc: string = "example.com";

  public isAddMode: boolean = true;

  public object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  constructor() {
    this.name = 'vyom';
    this.add = new EventEmitter();
  }
  
  ngOnInit(): void {
    console.log(this.userList);
  }

  onClick = () => {
    this.add.emit(new Date());
  }

  onDetail(data: any) {
    this.add.emit(data);
  }
}
