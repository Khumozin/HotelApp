import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { HotelFeature } from 'src/app/shared/models/hotel-feature.model';
import { Room } from 'src/app/shared/models/room.model';
import { SystemConfig } from 'src/app/shared/models/system-config.model';
import { HotelFeatureService } from 'src/app/shared/services/hotel-feature.service';

declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  systemConfig: SystemConfig;
  hotelFeatures: HotelFeature[];
  rooms$: Observable<Room[]>;

  constructor(
    private appService: AppService,
    private hotelFeatureService: HotelFeatureService) {
  }

  ngOnInit(): void {
    this.initSlider();
    this.initScrollSpy();
    this.getSystemConfig();
    this.getHotelFeatures();
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

  getSystemConfig() {
    this.appService.fetchSystemConfig()
      .subscribe((config: SystemConfig) => this.systemConfig = config);

  }

  getHotelFeatures() {
    this.hotelFeatureService.fetchHotelFeatures()
      .subscribe((features: HotelFeature[]) => this.hotelFeatures = [...features]);
  }
}
