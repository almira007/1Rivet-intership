import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingHistoryUserComponent } from './booking-history-user/booking-history-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BookingService } from './Service/booking.service';



@NgModule({
  declarations: [
    AppComponent,
    BookingHistoryUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
