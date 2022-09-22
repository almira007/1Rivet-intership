import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { EmployeeModule } from '../employee/employee.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    EmployeeModule
  ]
})
export class SharedModule { }
