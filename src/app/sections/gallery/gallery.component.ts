import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/shared/models/room.model';
import { RoomService } from 'src/app/shared/services/room.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {

  rooms: Room[];

  galleryItemsFirstRow: any[];
  galleryItemsSecondRow: any[];

  constructor(private router: Router, private roomService: RoomService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  ngOnChanges() {
  }

  onGalleryCardClicked(roomID) {
    this.router.navigate(['/room', roomID]);
  }

  getRooms() {
    this.roomService.fetchRooms().subscribe(rooms => {
      this.rooms = [...rooms];
      this.galleryItemsFirstRow = this.rooms.slice(0, 3);
      this.galleryItemsSecondRow = this.rooms.slice(3);
    });
  }

}
