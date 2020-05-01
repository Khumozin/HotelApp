import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Rooms } from '../../shared/enums/rooms.enum';
import { Amenity } from '../../shared/models/amenity.model';
import { GalleryItem } from '../../shared/models/gallery-item.model';
import { DataShareService } from '../../shared/services/data-share.service';
import { GalleryItemService } from '../../shared/services/gallery-item.service';
import { HomeService } from '../../shared/services/home.service';

declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  amenities: Amenity[];
  galleryItems$: Observable<GalleryItem[]>;

  constructor(
    private router: Router,
    private dataShare: DataShareService,
    private homeService: HomeService,
    private galleryItemsService: GalleryItemService) {
    this.handleDataShare();
    this.getAmenities();
  }

  ngOnInit(): void {
    this.initSlider();
    this.initScrollSpy();
    this.getGalleryItems();
  }

  onGalleryCardClicked(type) {
    this.dataShare.setRoomType(type);
    this.router.navigate(['/room']);
  }

  initSlider() {
    // slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000
    });
  }

  initScrollSpy() {
    // scrollspy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});
  }

  handleDataShare() {
    this.dataShare.setRoomType(Rooms.Executive);
  }

  getAmenities() {
    this.homeService.fetchAmenities().subscribe((items: Amenity[]) => {
      this.amenities = [...items];
    })
  }

  getGalleryItems() {
    this.galleryItems$ = this.galleryItemsService.fetchGalleryItems();
  }
}
