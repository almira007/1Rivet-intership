import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Users } from 'src/app/user.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public userData: Users[];
  constructor(private studentService: StudentService) { 
    this.userData=[];
  }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void{
   this.studentService.getUser().subscribe((user:Users[])=>{
   this.userData = user;
   });
  }
}
