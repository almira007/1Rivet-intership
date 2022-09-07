import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  count:number=1;
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit call",this.count);
    this.count++;
  }
  ngOnChanges(): void{
    console.log("ngOnChanges call",this.count);
    this.count++;
  }

  ngAfterContentChecked(): void{
    console.log("ngAfterContentChecked call",this.count);
    this.count++;
  }

  ngDoCheck(): void{
    console.log("ngDoCheck call",this.count);
    this.count++;
  }

  ngAfterContentInit(): void{
    console.log("ngAfterContentInit call",this.count);
    this.count++;
  }

  ngAfterViewInit(): void{
    console.log("ngAfterViewInit call",this.count);
    this.count++;
  }

  ngAfterViewChecked(): void{
    console.log("ngAfterViewChecked call",this.count);
    this.count++;
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy call",this.count);
    this.count++;
  }
}
