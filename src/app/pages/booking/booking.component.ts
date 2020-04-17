import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book.model';
import { DataShareService } from 'src/app/shared/services/data-share.service';

import { Rooms } from '../../shared/enums/rooms.enum';

declare const M: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, AfterViewInit {

  roomType: Rooms;
  RoomTypes = Rooms;
  roomNummbers = [...Array(10).keys()];
  bookingForm: FormGroup;
  currentBooking: Book;

  constructor(private router: Router,
    private dataShare: DataShareService) {
    this.handleDataShare();
  }

  ngOnInit(): void {
    this.generateBookingForm();
  }

  ngAfterViewInit() {
    this.initDatepicker();
    this.initSelect();
  }

  initDatepicker() {
    const elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
      format: 'yyyy-mm-dd'
    });
  }

  initSelect() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

  onConfirm() {
    const booking: Book = this.bookingForm.value;
    this.dataShare.setBooking(booking);
    this.router.navigate(['/confirmation']);
  }

  handleDataShare() {
    // room type
    this.roomType = this.dataShare.getRoomType();
    this.dataShare.setRoomType(this.roomType);


    this.dataShare.isDataAvailable(this.roomType);

    this.currentBooking = this.dataShare.getBooking();
  }

  generateBookingForm() {
    const date = new Date().toISOString().substring(0, 10);

    this.bookingForm = new FormGroup({
      'FirstName': new FormControl(null, Validators.required),
      'Surname': new FormControl(null, Validators.required),
      'ArrivalDate': new FormControl(date, Validators.required),
      'DepartureDate': new FormControl(date, Validators.required),
      'RoomType': new FormControl(this.roomType, Validators.required),
      'NumberOfRooms': new FormControl(0, Validators.required),
      'Cellphone': new FormControl(null, Validators.required),
      'Email': new FormControl(null, Validators.required)
    });

    this.bookingForm.controls['ArrivalDate'].valueChanges.subscribe(console.log);
    this.bookingForm.controls['DepartureDate'].valueChanges.subscribe(console.log);

    if (this.currentBooking) {
      this.bookingForm.setValue(this.currentBooking);
    }
  }

}
