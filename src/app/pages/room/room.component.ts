import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';

declare const M: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  selectedRoom$: Observable<Room>;
  roomType: string;

  constructor(private route: ActivatedRoute, private router: Router,
    private roomService: RoomService) {
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
    const currentRoomID: string = this.route.snapshot.paramMap.get('id');
    if (currentRoomID) {
      this.roomType = currentRoomID;
      this.selectedRoom$ = this.getSelectedRoom(currentRoomID);
    } else {
      this.router.navigate(['/']);
    }
  }

  getSelectedRoom(roomID: string) {
    return this.roomService.fetchRoomDetails(roomID);
  }

}
