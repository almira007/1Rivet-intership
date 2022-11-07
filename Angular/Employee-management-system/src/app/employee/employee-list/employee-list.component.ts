import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Employee } from '../Model/employee.model';
import { EmployeeCommunicationService } from '../service/employee-communication.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  photos: any;


  public employeeList: Employee[]
  private overlayRef!: OverlayRef;

  // Infinite Scroll
  scrollDistance!: number;
  scrollUpDistance!: number;
  throttle!: number;
  sum: number;
  start: number;
  direction = "";





  constructor(private employeeService: EmployeeService,
    private router: Router,
    private overlay: Overlay,
    private employeeCommunicationService: EmployeeCommunicationService) {
    this.employeeList = [];

    this.throttle = 10;
    this.scrollDistance = 5;
    this.scrollUpDistance = 5;
    this.sum = 20;
    this.start = 1;

  }

  ngOnInit(): void {
    this.getEmployeedata();

    //add data
    // this.employeeCommunicationService.addEmployeedata.subscribe((response: Employee) => {
    //   this.employeeList.push(response);
    // });

    // this.employeeCommunicationService.addEmployeedata$.subscribe((res) => {
    //   if (res) {
    //     this.getEmployeedata();
    //   }
    // });
    this.employeeCommunicationService.datapresent.subscribe((result) => {
      console.log(result);
      if (result) {
        this.getEmployeedata();
      }
    });
  }

  public getEmployeedata() {
    this.employeeService.getEmployee().subscribe((data) => {
      this.employeeList = data;
    });
  }
  public openForm() {
    // this.router.navigateByUrl("employee/employee-form")
    // Overlay config
    const overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    this.overlayRef = this.overlay.create(overlayConfig);
    // Over Porat;
    const portal = new ComponentPortal(EmployeeFormComponent);
    // porat attched
    const componentRef = this.overlayRef.attach(portal);

    componentRef.instance.confirm.subscribe((res) => {
      this.overlayRef.detach();
    });

    componentRef.instance.cancle.subscribe((res) => {
      this.overlayRef.detach();
    });
  }

  /**
   * Edit employee data 
   */
  public editRecord() {
    // Overlay config
    const overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    this.overlayRef = this.overlay.create(overlayConfig);
    // Over Porat;
    const portal = new ComponentPortal(EmployeeFormComponent);
    // porat attched
    const componentRef = this.overlayRef.attach(portal);

    componentRef.instance.confirm.subscribe((res) => {
      this.overlayRef.detach();
    });

    componentRef.instance.cancle.subscribe((res) => {
      this.overlayRef.detach();
    });
  }

  getPhoto() {

    this.employeeService.getDataScroll('employee', this.sum).subscribe((result: any) => {
      console.log(result);
      this.photos = result.photos;
      this.addItems(this.start, this.sum)
    },
      (error) => {
        console.log(error);
      })

  }

  addItems(index: any, sum: any) {
    for (let i = index; i < sum; ++i) {
      this.employeeList.push(this.photos[i]);
      console.log(this.employeeList);
    }
  }

  onScroll() {
    // add another 20 items  
    this.start++
    this.getEmployeedata();
  }

}
