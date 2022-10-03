import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudDetailsComponent } from './crud-details/crud-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipePipe } from './currency-pipe/currency-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDataService } from '../service/employee-data.service';


@NgModule({
  declarations: [
    CrudComponent,
    CrudFormComponent,
    CrudListComponent,
    CrudDetailsComponent,
    CurrencyPipePipe
  ],
  imports: [
    CommonModule,
    // AppRoutingModule,
    CrudRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeDataService],

})
export class CrudModule { }
