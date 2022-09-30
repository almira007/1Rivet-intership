import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CurrencyPipePipe } from './currency-pipe/currency-pipe.pipe';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    CurrencyPipePipe,
    EmployeeDetailsComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
