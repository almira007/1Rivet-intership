import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
