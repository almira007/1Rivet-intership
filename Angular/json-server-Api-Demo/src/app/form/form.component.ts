import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  users: any;
  constructor(private userData: UserDataService) {

    this.userData.users().subscribe((data)=>{
      this.users = data;
    });
   }

  ngOnInit(): void {
  }

  public getUserFormData(data:any): void{
    // console.log(data);
    this.userData.saveUsers(data).subscribe((result)=>{
      console.log(result);
    })
  }
}
