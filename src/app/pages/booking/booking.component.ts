import { Component, OnInit } from '@angular/core';
import { RoomType } from 'src/app/shared/models/room-type.model';
import { RoomTypeService } from 'src/app/shared/services/room-type.service';

import { Rooms } from '../../shared/enums/rooms.enum';

declare const M: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  roomType: Rooms;
  RoomTypes = Rooms;
  roomNummbers = [...Array(10).keys()];
  roomTypesDataSource: RoomType[];

  constructor(private roomTypeService: RoomTypeService) {
  }

  ngOnInit(): void {
    this.getRoomTypes();
  }

  getRoomTypes() {
    this.roomTypeService.fetchRoomTypes().subscribe(items => {
      this.roomTypesDataSource = items;
    });
  }

}
