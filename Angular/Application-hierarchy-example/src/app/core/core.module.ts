import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { SidbarComponent } from './component/sidbar/sidbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
// import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { SignUpComponent } from './component/sign-up/sign-up.component';


@NgModule({
  declarations: [
            HeaderComponent,
            SidbarComponent,
            FooterComponent,
            AboutComponent,
            PageNotFoundComponent,
            SignUpComponent
  ],
  imports: [
    CommonModule,
   AppRoutingModule
    
  ],
  exports:[
    HeaderComponent,
    SidbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
