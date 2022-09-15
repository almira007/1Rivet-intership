import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternModule } from './intern/intern.module';
import { MentorModule } from './mentor/mentor.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TaskbarComponent,
    // InternListComponent,
    // InternFormComponent,
    // MentorListComponent,
    // MentorFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    MentorModule,
    InternModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
