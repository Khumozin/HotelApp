import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-room-carousel',
  templateUrl: './room-carousel.component.html',
  styleUrls: ['./room-carousel.component.scss']
})
export class RoomCarouselComponent implements OnInit, AfterViewInit {

  @Input() images: any[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initCarousel();
  }

  initCarousel() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      duration: 200,
    });
  }

}
