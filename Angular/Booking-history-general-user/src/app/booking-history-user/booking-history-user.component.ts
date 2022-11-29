import { Component, OnInit } from '@angular/core';
import { bookingHistoryUser } from '../bookingHistory.model';
import { BookingService } from '../Service/booking.service';

@Component({
  selector: 'app-booking-history-user',
  templateUrl: './booking-history-user.component.html',
  styleUrls: ['./booking-history-user.component.scss']
})
export class BookingHistoryUserComponent implements OnInit {
  bookUser: bookingHistoryUser[];

  public scroll: number;
  public scrollsize: number;
  public studioid: any;

  constructor(private bookService: BookingService) {
    this.bookUser = [];

    this.scroll = 1;
    this.scrollsize = 10;
  }

  ngOnInit(): void {
    this.getBookuserData();
  }

  getBookuserData() {
    this.bookService.getBookUser(this.scroll, this.scrollsize).subscribe((result) => {
      console.log(result);
      this.bookUser = this.bookUser.concat(result);
    });

  }

  public onScroll() {
    this.scroll++;
    this.getBookuserData();
  }
}
