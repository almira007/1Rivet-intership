import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { ChildComponent } from './parent/child/child.component';
import { DescToIncComponent } from './desc-to-inc/desc-to-inc.component';
import { HeaderComponent } from './header/header.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgclassNgstyleComponent } from './ngclass-ngstyle/ngclass-ngstyle.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DescToIncComponent,
    HeaderComponent,
    SidbarComponent,
    FooterComponent,
    MainComponent,
    EventBindingComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    TwoWayBindingComponent,
    NgclassNgstyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
