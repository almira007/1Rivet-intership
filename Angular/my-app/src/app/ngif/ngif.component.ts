import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isValid:boolean=false;

  public onCreateBlock(){
    this.isValid=true;
  }
}
