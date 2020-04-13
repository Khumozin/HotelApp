import { Component, OnInit } from '@angular/core';
import { Rooms } from 'src/app/shared/enums/rooms.enum';

import { features, room } from '../../shared/consts/data';

declare const M: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  featureList = features;
  room = room.find(ii => ii.roomType === Rooms.Executive);

  constructor() { }

  ngOnInit(): void {
    this.initCollapsible();
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }

}
