import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';


@NgModule({
  declarations: [
    FormsComponent,
    FormControlExampleComponent,
    FormGroupExampleComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
