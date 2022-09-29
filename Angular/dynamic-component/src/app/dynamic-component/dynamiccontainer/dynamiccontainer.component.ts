import { Type } from '@angular/compiler';
import { Component, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';

@Component({
  selector: 'app-dynamiccontainer',
  templateUrl: './dynamiccontainer.component.html',
  styleUrls: ['./dynamiccontainer.component.scss']
})
export class DynamiccontainerComponent implements OnInit {

  @ViewChild('container',{read: ViewContainerRef,static: true}) container!: ViewContainerRef;

  productNames:any = {
    mobile: "mobile",
    laptop: "laptop",
    watch: "match",
    burger: "burger",
    ovan: "ovan"
  };

  constructor() { }

  ngOnInit(): void {
  }

  createComponent(componenName: string){
    this.container.clear();
    this.container.createComponent(MobileComponent);
  }

  getComponentType(name:string): Type<any>{
    let type: Type<any> = MobileComponent;
    switch (name) {
      case this.productNames.mobile:{
        type = MobileComponent;
        break;
      }
      case this.productNames.laptop:{
        type = LaptopComponent;
        break;
      }
    }
    return type;
  }
}
