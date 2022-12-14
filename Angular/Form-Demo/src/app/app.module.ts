import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TempplateFormComponent } from './tempplate-form/tempplate-form.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    TempplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
