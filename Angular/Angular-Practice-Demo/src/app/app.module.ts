import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactAsComponent } from './contact-as/contact-as.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrudModule } from './crud/crud.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactAsComponent,
    PageNotFoundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CrudModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
