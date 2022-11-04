import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DolarToRsPipe } from './pipe/dolar-to-rs.pipe';



@NgModule({
  declarations: [
    DolarToRsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DolarToRsPipe
  ]
})
export class SharedModule { }
