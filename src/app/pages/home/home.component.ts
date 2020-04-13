import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { amenities, gallery } from 'src/app/shared/consts/data';
import { DataShareService } from 'src/app/shared/services/data-share.service';

declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  amenities = amenities;
  galleryItemsFirstRow = gallery.slice(0, 3);
  galleryItemsSecondRow = gallery.slice(3);

  constructor(private router: Router, private dataShare: DataShareService) { }

  ngOnInit(): void {
    this.initSlider();
    this.initScrollSpy();
  }

  onGalleryCardClicked(type) {
    console.log(type);
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

}
