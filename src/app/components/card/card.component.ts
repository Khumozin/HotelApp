import { Component, Input, OnInit } from '@angular/core';

import { HotelFeature } from '../../shared/models/hotel-feature.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: HotelFeature;

  constructor() { }

  ngOnInit(): void {
  }
}
