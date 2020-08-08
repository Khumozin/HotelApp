import { Component, Input, OnInit } from '@angular/core';

import { HotelFeature } from '../../shared/models/hotel-feature.model';

@Component({
  selector: 'app-icon-boxes',
  templateUrl: './icon-boxes.component.html',
  styleUrls: ['./icon-boxes.component.scss']
})
export class IconBoxesComponent implements OnInit {

  @Input() hotelFeatures: HotelFeature[];

  constructor() { }

  ngOnInit(): void {
  }

}
