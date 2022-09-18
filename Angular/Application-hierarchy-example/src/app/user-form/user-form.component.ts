import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../users.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @ViewChild('userForm') userForm!: NgForm;

  public isSubmitted:boolean;
  public user: User;

  constructor() {
    this.user = new User();
    this.isSubmitted=false;
  }

  ngOnInit(): void {
  }

  public onAdd() {
    this.isSubmitted=true;
    console.log(this.userForm.form.value);
  }
}
