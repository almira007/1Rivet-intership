import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactAsComponent } from './contact-as/contact-as.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrudModule } from './crud/crud.module';
import { ObservablesExampleComponent } from './observables-example/observables-example.component';
import { HttpClientModule } from '@angular/common/http';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { BehaviorExampleComponent } from './behavior-example/behavior-example.component';
import { ReplayExampleComponent } from './replay-example/replay-example.component';
import { AsyncExampleComponent } from './async-example/async-example.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactAsComponent,
    PageNotFoundComponent,
    ObservablesExampleComponent,
    SubjectExampleComponent,
    BehaviorExampleComponent,
    ReplayExampleComponent,
    AsyncExampleComponent
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
