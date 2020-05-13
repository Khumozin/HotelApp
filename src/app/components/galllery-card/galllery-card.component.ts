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
  @Input() roomType: Rooms;
  @Output() onClick = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  ngOnInit(): void { }

  onCardClick(roomType) {
    this.onClick.emit(roomType);
  }

}
