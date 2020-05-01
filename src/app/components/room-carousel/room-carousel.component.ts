import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GalleryItemImage } from 'src/app/shared/models/gallery-item.model';

declare const M: any;

@Component({
  selector: 'app-room-carousel',
  templateUrl: './room-carousel.component.html',
  styleUrls: ['./room-carousel.component.scss']
})
export class RoomCarouselComponent implements OnInit, AfterViewInit {

  @Input() images: GalleryItemImage[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.initCarousel();
    this.initSlider();
  }

  initCarousel() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      duration: 200,
    });
  }

  initSlider() {
    // slider
    const slider = document.querySelector('.slider');
    const i = M.Slider.init(slider, {
      indicators: true,
      height: 300,
      transition: 500,
      interval: 4000
    });
  }

}
