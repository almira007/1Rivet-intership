import { Component, OnInit } from '@angular/core';
import { Intern } from './intern.model';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {

  public internsData: Intern[];
  constructor() {
    this.internsData = [
      {
        id: 1,
        name: 'Pratik Tandel',
        age: 22,
        gender: 'Male',
        date: '6/15/15, 9:03 AM',
        amount: '100'
      },
      {
        id: 2,
        name: 'User 2',
        age: 23,
        gender: 'Male',
        date: '6/15/15, 9:03 AM',
        amount: '200'
      },
      {
        id: 3,
        name: 'User 3',
        age: 24,
        gender: 'Female',
        date: '6/15/15, 9:03 AM',
        amount: '300'
      },
      {
        id: 4,
        name: 'User 4',
        age: 25,
        gender: 'Female',
        date: '6/15/15, 9:03 AM',
        amount: '400'
      }
    ];
  }

  ngOnInit(): void {
  }

  onDeleteUser(id: number) {
    console.log(id);
  }
}
