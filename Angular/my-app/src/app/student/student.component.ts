
import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {  
  @Input() myinputMsg:string;  
    
  constructor() { }  
    
  ngOnInit() {  
     console.log(this.myinputMsg);  
     }  
    
  } 