import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/shared/models/room.model';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss']
})
export class RoomInfoComponent implements OnInit {

  @Input() room: Room;

  constructor(private router: Router, route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onBookNow() {
    // this.router.navigate(['/booking', this.type]);
  }

}
