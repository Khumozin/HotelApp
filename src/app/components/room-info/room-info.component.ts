import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Rooms } from '../../shared/enums/rooms.enum';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss']
})
export class RoomInfoComponent implements OnInit {

  @Input() title: string;
  @Input() price: string;
  @Input() description: string;
  @Input() type: Rooms;

  constructor(private router: Router, route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onBookNow() {
    this.router.navigate(['/booking', this.type]);
  }

}
