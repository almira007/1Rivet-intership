import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { ChildComponent } from './parent/child/child.component';
import { DescToIncComponent } from './desc-to-inc/desc-to-inc.component';
import { HeaderComponent } from './header/header.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { SidbarComponent } from './sidbar/sidbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DescToIncComponent,
    HeaderComponent,
    TwowayBindingComponent,
    SidbarComponent
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
