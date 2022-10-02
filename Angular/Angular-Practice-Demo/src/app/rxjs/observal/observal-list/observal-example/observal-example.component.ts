import { Component, OnDestroy, OnInit } from '@angular/core';
import { count, observable, Observable, Subscription } from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';

@Component({
  selector: 'app-observal-example',
  templateUrl: './observal-example.component.html',
  styleUrls: ['./observal-example.component.scss']
})
export class ObservalExampleComponent implements OnInit,OnDestroy {

  status:any
  status2:any
  unsub:Subscription
   constructor(
     private EmployeeDataService:EmployeeDataService
   ) { 
      
     this.unsub=new Subscription()
   }
 
 
   ngOnInit(): void {
     //Ex-01 (Manual)
     const custobs = new Observable(observer => {
       setTimeout(()=>{
         observer.next('Angular');
       },2000)
       setTimeout(()=>{
         observer.next('Typescript');
       },3000)
       setTimeout(()=>{
         observer.next('Html And Css');
         observer.complete();
       
       },4000)
       setTimeout(()=>{
         observer.next('Javascript');
         observer.error(new Error('Failed!'))
       
       },5000)
       setTimeout(()=>{
         observer.next('JQuery');
       },6000)
       
       // observer.error();
       // observer.complete();
       
     })
     custobs.subscribe(res=>{
       console.log(res)
       this.EmployeeDataService.print(res,'elContainer')
     },
     (error)=>{
       this.status='error'  },
       ()=>{
         this.status='complete'
       }
     )
   const Array=['java','html' ,'angular']
     const custobs1$ = new Observable(observer => {
      let count = 0;
 
       setInterval(()=>{
         observer.next(Array[count]);
         if(count >= 2){
           observer.complete();
           this.status='complete'  
         }
        count ++;
       },2000)
   
        
     })
 
   const unsub= custobs1$.subscribe(res=>{
     console.log(res);
     this.EmployeeDataService.print(res,'elContainer1')
 
     },
     (error)=>{
       this.status='error'  },
       ()=>{
         this.status='complete'
       })
     
   }
   ngOnDestroy(): void {
    this.unsub.unsubscribe()
   }
 }
 