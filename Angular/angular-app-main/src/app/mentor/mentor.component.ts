import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  public usersData;

  constructor() {
    this.usersData = [
      {
        name: 'Pratik Tandel',
        age: 22,
        gender: 'Male',
        date: '6/15/15, 9:03 AM',
        amount: '100'
      },
      {
        name: 'User 2',
        age: 23,
        gender: 'Male',
        amount: '200'
      },
      {
        name: 'User 3',
        age: 24,
        gender: 'Female',
        amount: '300'
      },
      {
        name: 'User 4',
        age: 25,
        gender: 'Female',
        amount: '400'
      }
    ];
  }

  ngOnInit(): void {
  }

  onAddUser(data: any) {
    console.log(data);
  }
}
