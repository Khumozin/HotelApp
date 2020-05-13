import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoomType } from 'src/app/shared/models/room-type.model';
import { RoomTypeService } from 'src/app/shared/services/room-type.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {

  roomTypes: RoomType[];
  roomTypesSub: Subscription;

  constructor(
    private router: Router,
    private roomTypeService: RoomTypeService) { }

  ngOnInit(): void {
    this.roomTypesSub = this.roomTypeService.fetchRoomTypes()
      .subscribe(ii => (this.roomTypes = ii));
  }

  ngOnDestroy() {
    if (this.roomTypesSub) {
      this.roomTypesSub.unsubscribe();
    }
  }

  onBook() {
    this.router.navigate(['/booking', this.roomTypes[0].ID]);
  }

}
