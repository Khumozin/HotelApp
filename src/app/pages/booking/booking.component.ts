import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  // roomType: Rooms;
  // RoomTypes = Rooms;
  // roomNummbers = [...Array(10).keys()];
  // roomTypesDataSource: RoomType[];

  constructor() {
  }

  ngOnInit(): void {
    this.getRoomTypes();
  }

  getRoomTypes() {
    // this.roomTypeService.fetchRoomTypes().subscribe(items => {
    //   this.roomTypesDataSource = items;
    // });
  }

}
