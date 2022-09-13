import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-ngstyle',
  templateUrl: './ngclass-ngstyle.component.html',
  styleUrls: ['./ngclass-ngstyle.component.scss']
})
export class NgclassNgstyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mypro:boolean=true;

  public mystyle1:string="15px"

  public isActive:boolean = false;

  public  mltclasses={
    class1:true,
    class2:false,
    class3:true
  }

  public mltstyle={
    'background': 'pink',
    'border': '10px solid green'
  }
}
