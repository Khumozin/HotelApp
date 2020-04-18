import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-boxes',
  templateUrl: './icon-boxes.component.html',
  styleUrls: ['./icon-boxes.component.scss']
})
export class IconBoxesComponent implements OnInit {

  @Input() amenities: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
