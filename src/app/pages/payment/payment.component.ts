import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rooms } from 'src/app/shared/enums/rooms.enum';
import { Book } from 'src/app/shared/models/book.model';
import { DataShareService } from 'src/app/shared/services/data-share.service';

// import { room } from 'src/app/shared/consts/data';
declare const M: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  booking: Book;
  roomType: string;

  constructor(private router: Router,
    private dataShare: DataShareService) {
    this.handleDataShare();
    this.getRoomType(this.booking.RoomType);
  }

  ngOnInit(): void {
  }

  onPaypalPayment() {
    M.toast({ html: 'Coming Soon!', classes: 'rounded light-green accent-3' });
    // this.router.navigate(['/paypal']);
  }

  onStripePayment() {
    M.toast({ html: 'Coming Soon!', classes: 'rounded light-green accent-3' });
  }

  handleDataShare() {
    this.booking = this.dataShare.getBooking();
    this.dataShare.setBooking(this.booking);
    this.dataShare.isDataAvailable(this.booking);
  }

  getRoomType(type) {
    // this.roomType = room.find(ii => ii.RoomTypeID === type).Title;
  }

  getNoRooms(noRooms: number): number {
    return Number(noRooms) + 1;
  }

  calculatePrice(roomType: Rooms): number {
    // const roomDetails = room.find(ii => ii.RoomTypeID === roomType);
    // const noDays = this.getNoRooms(this.booking.NumberOfRooms);
    // return roomDetails.Price * noDays;
    return 0;
  }
}
