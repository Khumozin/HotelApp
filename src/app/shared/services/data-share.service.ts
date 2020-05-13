import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Rooms } from '../enums/rooms.enum';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private roomType: Rooms;
  private booking: Booking;

  constructor(private router: Router) { }

  // Room Type
  setRoomType(type: Rooms) {
    this.roomType = type;
  }
  getRoomType(): Rooms {
    return this.roomType;
  }

  // Booking
  setBooking(book: Booking) {
    this.booking = book;
  }
  getBooking(): Booking {
    return this.booking;
  }

  // handle browser refresh event 
  isDataAvailable(type: any) {
    if (type === undefined) {
      this.router.navigate(['/']);
    }
  }
}
