import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListTwoComponent } from './user-list-two/user-list-two.component';



@NgModule({
  declarations: [
    UserListTwoComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    UserListTwoComponent
  ]
})
export class UserModule { }
