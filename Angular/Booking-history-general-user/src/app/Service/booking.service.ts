import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { bookingHistoryUser } from '../bookingHistory.model';

@Injectable()
export class BookingService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    //this.baseUrl = environment.bookingUrl;
    this.baseUrl = "http://localhost:3000/";
  }
  getBookUser(scroll: number, scrollNumber: number): Observable<bookingHistoryUser[]> {
    const url = this.baseUrl + "booking";
    // return this.http.get<bookingHistoryUser[]>(url);
    return this.http.get<bookingHistoryUser[]>(`${url}?_page=${scroll}&_limit=${scrollNumber}`);
  }
}
