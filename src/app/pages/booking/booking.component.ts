import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book.model';

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

  constructor(private router: Router, private route: ActivatedRoute) {
    const routerState = this.router.getCurrentNavigation().extras.state;
    this.handleRoutes(routerState);
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
    this.router.navigate(['/confirmation']);
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

    if (this.currentBooking) {
      this.bookingForm.setValue(this.currentBooking);
    }
  }

  handleRoutes(routerState) {
    const roomType = +this.route.snapshot.paramMap.get('id');
    if (roomType !== undefined || roomType >= 0) {
      this.roomType = roomType;
    } else {
      this.router.navigate(['/']);
    }
  }

}
