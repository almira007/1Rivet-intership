import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectiveFormExampleComponent } from './rective-form-example/rective-form-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    RectiveFormExampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
