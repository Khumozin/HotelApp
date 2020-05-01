import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Rooms } from '../../shared/enums/rooms.enum';
import { GalleryItem } from '../../shared/models/gallery-item.model';

@Component({
  selector: 'app-galllery-card',
  templateUrl: './galllery-card.component.html',
  styleUrls: ['./galllery-card.component.scss']
})
export class GallleryCardComponent implements OnInit {

  @Input() galleryItem: GalleryItem;
  @Output() onClick = new EventEmitter<any>();

  @Input() roomType: Rooms;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.galleryItem.Thumbnail.data);
  }

  onCardClick(roomType) {
    this.onClick.emit(roomType);
  }

}
