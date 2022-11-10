import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DolarToRsPipe } from './pipe/dolar-to-rs.pipe';
import { ConformationComponent } from './component/conformation/conformation.component';



@NgModule({
  declarations: [
    DolarToRsPipe,
    ConformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DolarToRsPipe
  ]
})
export class SharedModule { }
