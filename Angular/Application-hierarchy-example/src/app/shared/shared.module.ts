import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgifComponent } from './component/ngif/ngif.component';


@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    NgifComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
