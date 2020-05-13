import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';

import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends AppService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  addBooking(book: Booking): Observable<Booking> {
    const url = `${this.endPoint}/booking`;
    return this.httpClient.post<Booking>(url, book)
      .pipe(map(booking => booking));
  }

  fetchBookingByID(id: string): Observable<Booking> {
    const url = `${this.endPoint}/booking/${id}`;
    return this.httpClient.get<Booking>(url);
  }
}
