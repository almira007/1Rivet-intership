import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Employee } from '../Model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList: Employee[]
  private overlayRef!: OverlayRef;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private overlay: Overlay) {
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.getEmployeedata();
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
}
