import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConformationComponent } from 'src/app/shared/component/conformation/conformation.component';
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

  public employeeList: Employee[]
  private overlayRef!: OverlayRef;

  public scroll: number;
  public scrollsize: number;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private overlay: Overlay,
    private employeeCommunicationService: EmployeeCommunicationService) {
    this.employeeList = [];

    this.scroll = 1;
    this.scrollsize = 10;
  }

  ngOnInit(): void {
    this.getEmployeedata();

    this.employeeCommunicationService.datapresent.subscribe((result) => {
      console.log(result);
      if (result) {
        this.getEmployeedata();
      }
    });
  }

  public getEmployeedata() {
    this.employeeService.getEmployee(this.scroll, this.scrollsize).subscribe((data) => {
      this.employeeList = this.employeeList.concat(data);
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

    return componentRef;
  }

  /**
   * Edit employee data 
   */
  public editRecord(item: Employee) {
    const componentRef = this.openForm();
    componentRef.instance.employeeForm.patchValue(item);
  }

  public onScroll() {
    this.scroll++;
    this.getEmployeedata();
  }

  /**
   * delete the record using overlay
   */
  public deleteEmployeeData(item: Employee) {
    // Overlay config
    const overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    this.overlayRef = this.overlay.create(overlayConfig);
    // Over Porat;
    const portal = new ComponentPortal(ConformationComponent);
    // porat attched
    const componentRef = this.overlayRef.attach(portal);

    componentRef.instance.name = item.firstName;

    componentRef.instance.confirm.subscribe((res) => {
      this.employeeService.deleteEmployee(item.id).subscribe((result) => {
        this.getEmployeedata();
      });
      this.overlayRef.detach();
    });

    componentRef.instance.cancle.subscribe((res) => {
      this.overlayRef.detach();
    });

    return componentRef;
  }
}
