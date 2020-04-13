import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Rooms } from '../../shared/enums/rooms.enum';

@Component({
  selector: 'app-galllery-card',
  templateUrl: './galllery-card.component.html',
  styleUrls: ['./galllery-card.component.scss']
})
export class GallleryCardComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Output() onClick = new EventEmitter<any>();

  @Input() roomType: Rooms;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCardClick(roomType) {
    this.onClick.emit(roomType);
  }

}
