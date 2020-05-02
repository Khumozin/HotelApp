import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';

declare const M: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy, AfterViewInit {

  selectedRoom: Room;
  selectedRoomSub: Subscription;
  roomType: string;
  isReady = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private roomService: RoomService) {
    this.handleRoutes();
  }

  ngOnInit(): void {
    this.initCollapsible();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    if (this.selectedRoomSub) {
      this.selectedRoomSub.unsubscribe();
    }
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }

  handleRoutes() {
    const currentRoomID: string = this.route.snapshot.paramMap.get('id');
    if (currentRoomID) {
      this.roomType = currentRoomID;
      this.getSelectedRoom(currentRoomID);
    } else {
      this.router.navigate(['/']);
    }
  }

  async getSelectedRoom(roomID: string) {
    this.selectedRoomSub = await this.roomService.fetchRoomDetails(roomID)
      .subscribe(room => {
        this.isReady = true;
        this.selectedRoom = room
      });
  }

}
