import { Injectable } from '@angular/core';

import { Rooms } from '../enums/rooms.enum';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private roomType: Rooms;

  constructor() { }

  setRoomType(type: Rooms) {
    this.roomType = type;
  }

  getRoomType(): Rooms {
    return this.roomType;
  }
}
