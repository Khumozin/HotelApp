import { Component, Input, OnInit } from '@angular/core';
import { GalleryItemFeature } from 'src/app/shared/models/gallery-item.model';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {

  @Input() featureList: GalleryItemFeature[] = [];

  isToggled = false;
  collapsibleIcon = 'add';

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.isToggled = !this.isToggled;
    this.collapsibleIcon = !this.isToggled ? 'add' : 'remove';
  }

}
