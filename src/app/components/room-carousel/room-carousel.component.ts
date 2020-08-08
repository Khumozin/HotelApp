import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { RoomImage } from 'src/app/shared/models/room-image.model';

declare const M: any;

@Component({
  selector: 'app-room-carousel',
  templateUrl: './room-carousel.component.html',
  styleUrls: ['./room-carousel.component.scss']
})
export class RoomCarouselComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() images: RoomImage[];
  byteImages: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initCarousel();
    this.initSlider();
  }

  ngOnChanges() {
    if (this.images) {

      this.byteImages = [];

      this.images.forEach((img: RoomImage) => {
        const image = 'data:image/jpeg;base64,' + img.image;
        this.byteImages.push(image);
      });
    }
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
