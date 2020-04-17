import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Rooms } from '../enums/rooms.enum';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private roomType: Rooms;
  private booking: Book;

  constructor(private router: Router) { }

  // Room Type
  setRoomType(type: Rooms) {
    this.roomType = type;
  }
  getRoomType(): Rooms {
    return this.roomType;
  }

  // Booking
  setBooking(book: Book) {
    this.booking = book;
  }
  getBooking(): Book {
    return this.booking;
  }

  // handle browser refresh event 
  isDataAvailable(type: any) {
    if (type === undefined) {
      this.router.navigate(['/']);
    }
  }
}
