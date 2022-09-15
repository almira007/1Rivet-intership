import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public title: string = "User";
  public imgSrc: string = 'https://image.shutterstock.com/image-photo/concept-words-live-demo-on-260nw-1958839.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log('button click');
  }
}
