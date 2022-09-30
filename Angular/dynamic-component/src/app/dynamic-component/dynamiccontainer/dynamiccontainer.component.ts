import { Type } from '@angular/compiler';
import { Component, ComponentRef, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BurgerComponent } from '../burger/burger.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';
import { OvanComponent } from '../ovan/ovan.component';
import { WatchComponent } from '../watch/watch.component';

@Component({
  selector: 'app-dynamiccontainer',
  templateUrl: './dynamiccontainer.component.html',
  styleUrls: ['./dynamiccontainer.component.scss']
})
export class DynamiccontainerComponent implements OnInit {

  @ViewChild('container',{read: ViewContainerRef,static: true}) container!: ViewContainerRef;

  components = new Map<string, ComponentRef<any>>();
  index: number=0;

  productName:any = {
    mobile: "mobile",
    laptop: "laptop",
    watch: "watch",
    burger: "burger",
    ovan: "ovan"
  };

  constructor() { }

  ngOnInit(): void {
  }

  createComponent(componenName: string){
    // this.container.clear();
    const getComponentType=this.getComponentType(componenName)
    let uniqueName = componenName + '-' + this.index.toString();
    const component=this.container.createComponent(getComponentType);
    component.instance.name = uniqueName;
    component.instance.closed.subscribe((res:any) =>{
          res.deleteComponent(res.name);
    });
    this.components.set(uniqueName, component);
    this.index++;
  }

  getComponentType(name:string){
    let Type= MobileComponent;
    switch (name) {
      case this.productName.mobile:{
        Type = MobileComponent;
        break;
      }
      case this.productName.laptop:{
        Type = LaptopComponent;
        break;
      }
      case this.productName.watch:{
        Type = WatchComponent;
        break;
      }
      case this.productName.burger:{
        Type = BurgerComponent
        break;
      }
      case this.productName.ovan:{
        Type = OvanComponent
        break;
      }
    }
    return Type;
  }

  deleteComponent(componenName: string){
    if(this.components.has(componenName)){
      this.components.get(componenName)?.destroy();
      this.components.delete(componenName);
    }
  }
}
