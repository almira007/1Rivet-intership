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
  public studio: any;
  public artist: any;

  constructor(private bookService: BookingService, private service: BookingService,) {
    this.bookUser = [];
    this.studio = [];
    this.artist = [];

    this.scroll = 1;
    this.scrollsize = 10;
  }

  ngOnInit(): void {
    // this.getBookuserData();
    this.getStudioUser();
    this.getArtistUser();
  }

  // // getBookuserData() {
  // //   this.bookService.getBookUser(this.scroll, this.scrollsize).subscribe((result) => {
  // //     console.log(result);
  // //     this.bookUser = this.bookUser.concat(result);
  // //   });

  // }

  public onScroll() {
    this.scroll++;
    this.getArtistUser();
    this.getStudioUser();
  }

  getStudioUser() {
    this.service.getStudio(this.scroll, this.scrollsize).subscribe((result) => {
      console.log(result);
      this.studio = this.studio.concat(result);
    })
  }
  getArtistUser() {
    this.service.getArtist(this.scroll, this.scrollsize).subscribe((result) => {
      console.log(result);
      this.artist = this.artist.concat(result);
    })
  }

}
