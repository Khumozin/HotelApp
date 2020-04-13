import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Rooms } from '../../shared/enums/rooms.enum';

declare const M: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, AfterViewInit {

  RoomTypes = Rooms;
  roomNummbers = [...Array(10).keys()];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initDatepicker();
    this.initSelect();
  }

  initDatepicker() {
    const elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {});
  }

  initSelect() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }

}
