import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }
 
  public choose='';
  setvalue(drp:any){
    this.choose=drp.target.value;
  }
  
}
