import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MentorFormComponent } from './mentor-form/mentor-form.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { MentorComponent } from './mentor.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { InitialsPipe } from './pipes/initials.pipe';



@NgModule({
  declarations: [
    MentorListComponent,
    MentorFormComponent,
    CurrencyFormatPipe,
    InitialsPipe,
    MentorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    MentorListComponent,
    MentorFormComponent
  ]
})
export class MentorModule { }
