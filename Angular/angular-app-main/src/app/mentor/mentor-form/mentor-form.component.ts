import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mentor } from '../mentor.model';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.css']
})
export class MentorFormComponent implements OnInit {

  @ViewChild('mentorForm') mentorForm: FormGroup;

  public model: Mentor;
  public isSubmitted: boolean;
  
  constructor() { 
    this.model = new Mentor();
    this.isSubmitted = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.mentorForm);
    console.log(this.mentorForm.value);
    console.log(this.model);
  }
}
