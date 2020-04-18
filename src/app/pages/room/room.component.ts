import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rooms } from 'src/app/shared/enums/rooms.enum';
import { Room } from 'src/app/shared/models/room.model';

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

  constructor(private route: ActivatedRoute, private router: Router) {
    this.handleRoutes();
  }

  ngOnInit(): void {
    this.initCollapsible();
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }

  handleRoutes() {
    const currentRoom: Rooms = +this.route.snapshot.paramMap.get('id');
    if (currentRoom) {
      this.roomType = currentRoom;
      this.selectedRoom = this.getSelectedRoom(this.roomType);
    } else {
      this.router.navigate(['/']);
    }
  }

  getSelectedRoom(type: Rooms): Room {
    return room.find(ii => ii.RoomType === type);
  }

}
