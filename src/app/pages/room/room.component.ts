import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { RoomFeature } from 'src/app/shared/models/room-feature.model';
import { RoomImage } from 'src/app/shared/models/room-image.model';
import { Room } from 'src/app/shared/models/room.model';
import { RoomFeatureService } from 'src/app/shared/services/room-feature.service';
import { RoomImageService } from 'src/app/shared/services/room-image.service';
import { RoomService } from 'src/app/shared/services/room.service';

declare const M: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy, AfterViewInit {

  roomID: string;
  room: Room;
  features: RoomFeature[] = [];
  images: RoomImage[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService,
    private roomImgService: RoomImageService,
    private roomFeatService: RoomFeatureService) {
    this.roomID = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.initCollapsible();
    this.getRoomInfo(this.roomID);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }

  getRoomInfo(roomId: string) {
    this.roomService.fetchRoom(this.roomID)
      .pipe(
        map(room => {
          this.room = room;
          return room;
        }),
        switchMap(r => this.roomFeatService.fetchRoomFeatures(r.id)),
        map(feature => {
          this.features = [...feature];
          return feature;
        }),
        switchMap(f => this.roomImgService.fetchRoomFeatures(this.room.id)),
        map(image => {
          this.images = [...image];
          return image;
        })
      ).subscribe();
  }

}
