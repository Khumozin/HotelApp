import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/shared/models/room.model';

@Component({
  selector: 'app-galllery-card',
  templateUrl: './galllery-card.component.html',
  styleUrls: ['./galllery-card.component.scss']
})
export class GallleryCardComponent implements OnInit {

  @Input() galleryItem: Room;
  // @Input() roomType: Rooms;
  @Output() onClick = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  ngOnInit(): void { }

  onCardClick(id: string) {
    this.onClick.emit(id);
  }

}
