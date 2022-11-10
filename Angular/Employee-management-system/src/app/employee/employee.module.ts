import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { MaskingNumberDirective } from './directory/masking-number.directive';
import { SharedModule } from '../shared/shared.module';
import { EmployeeCommunicationService } from './service/employee-communication.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { EmployeeAdapter } from './adapter/employee.adapter';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    MaskingNumberDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule,
    SharedModule,
    InfiniteScrollModule
  ],
  providers: [
    EmployeeService,
    EmployeeCommunicationService,
    EmployeeAdapter
  ]
})
export class EmployeeModule { }
