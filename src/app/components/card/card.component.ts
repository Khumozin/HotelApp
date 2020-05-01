import { Component, Input, OnInit } from '@angular/core';
import { Amenity } from 'src/app/shared/models/amenity.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() amenity: Amenity;

  constructor() { }

  ngOnInit(): void {
  }

}
