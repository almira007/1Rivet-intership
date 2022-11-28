import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingHistoryUserComponent } from './booking-history-user/booking-history-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'booking',
    pathMatch: 'full'
  },
  {
    path: 'booking',
    component: BookingHistoryUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
