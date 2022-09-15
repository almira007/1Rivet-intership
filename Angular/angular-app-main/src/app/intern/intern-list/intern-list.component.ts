import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Intern } from '../intern.model';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {

  /** Parent To Child */
  @Input() public internList: Intern[];

  /** Child To Parent */
  @Output() public deleteUser: EventEmitter<number>;
  
  constructor() { 
    this.deleteUser = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.internList)
  }

  onDelete(id: number) {
    this.deleteUser.emit(id);
  }
}
