import { Component, HostListener, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;

  screenSizes: { name: string, value: number }[] = [
    { name: 'Mobile', value: 600 },
    { name: 'Desktop ', value: 992 },
    { name: 'Large Desktop', value: 1200 },
  ];

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);

    if (this.screenWidth <= this.screenSizes[0].value) {
      M.toast({ html: 'Please rotate your device', classes: 'rounded' });
    }
  }

}
