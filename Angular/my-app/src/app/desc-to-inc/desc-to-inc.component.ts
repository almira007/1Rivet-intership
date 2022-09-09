import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desc-to-inc',
  templateUrl: './desc-to-inc.component.html',
  styleUrls: ['./desc-to-inc.component.scss']
})
export class DescToIncComponent implements OnInit {

  public session:string;
  public sizeNumber: number =50 ;

  
  constructor() {
    this.session='Angular';
    this.sizeNumber=50;
  }

  public changeSize(operationType: string): void{
    if (operationType == 'descrese') {
      this.sizeNumber = this.sizeNumber - 10;
    }
    else {
      this.sizeNumber = this.sizeNumber + 10;
    }
  }
  ngOnInit(): void {
  }
   

}
