import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from '../service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [StudentService],

})
export class StudentModule { }
