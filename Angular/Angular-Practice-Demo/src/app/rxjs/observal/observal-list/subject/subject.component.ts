import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeDataService } from 'src/app/service/employee-data.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  
 // public subject = new Subject();
  // public subject = new BehaviorSubject(0);
  // public subject = new ReplaySubject(2);
  public subject = new Subject();
  
  // a:number=10;
  // b:number=10;
  public observer1:any;
  public observer2:any;
  public status:any;
  constructor(private employeeService:EmployeeDataService) { }

  ngOnInit(): void {
    this.observer1 = this.subject.subscribe({
      next:(msg)=>{
        console.log("Next: "+msg);
        setTimeout(() => {
          this.employeeService.print(`Next: ${msg}`,'elContainer')
        }, 1000);
        
      },
      error:(err)=>{
        console.log(err);
        this.status='error'

      },
      complete:()=>{
        console.log("complete")
        setTimeout(() => {
          this.status='complete'
        }, 2000);
        
      }
    })
    this.subject.next(1)
    this.subject.next(2)
    this.subject.next(3)
    this.subject.next(4)
    this.subject.complete()
    this.subject.next(5)
  }
}
