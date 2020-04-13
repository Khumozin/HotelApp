import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rooms } from 'src/app/shared/enums/rooms.enum';
import { Room } from 'src/app/shared/models/room.model';
import { DataShareService } from 'src/app/shared/services/data-share.service';

import { features, room } from '../../shared/consts/data';

declare const M: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  featureList = features;
  selectedRoom: Room;
  roomType: Rooms;

  constructor(private dataShare: DataShareService, private router: Router) {
    this.roomType = this.dataShare.getRoomType();
    this.dataShare.setRoomType(this.roomType);
    this.checkSelectedRoom(this.roomType);
    this.selectedRoom = this.getSelectedRoom(this.roomType);
  }

  ngOnInit(): void {
    this.initCollapsible();
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }

  getSelectedRoom(type: Rooms): Room {
    return room.find(ii => ii.RoomType === type);
  }

  checkSelectedRoom(type) {
    if (type === undefined) {
      this.router.navigate(['/']);
    }
  }

}
