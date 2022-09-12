import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product =[
    {
      proimg:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80',name:'laptop',
      id:'pro01',
      price:15000
    },
    {
      proimg:'https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png',
      name:'mobile',
      id:'pro02',
      price:8000
    },
    {
      proimg:'https://pngimg.com/uploads/washing_machine/washing_machine_PNG15578.png',
      name:'Tv',
      id:'pro03',
      price:12000
    },
    {
      proimg:'https://pngimg.com/uploads/washing_machine/washing_machine_PNG15578.png',
      name:'washing matching',
      id:'pro04',
      price:20000
    }

  ]
}
