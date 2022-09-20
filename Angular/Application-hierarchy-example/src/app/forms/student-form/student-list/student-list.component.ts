import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() public set studentData(value: any) {
    if(value) {
      this._studentData = value;
      this.studentList.push(this.studentData);
    }
  }

  public get studentData(): any {
    return this._studentData;
  }

  @Output() public edit: EventEmitter<any>;
  @Output() public view: EventEmitter<any>;

  public studentList: any;

  private _studentData: any;

  constructor() {
    this.studentList = [];
    this.edit = new EventEmitter();
    this.view = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public editStudent(item: any): void {
    this.edit.emit(item)
  }

  public deleteStudent(item: any): void {
    console.log(item);
  }

  public viewStudent(item: any): void {
    debugger
    this.view.emit(item)
  }
}
