import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemConfig } from 'src/app/shared/models/system-config.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy, OnChanges {

  @Input() config: SystemConfig;
  image: string;

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  ngOnChanges() {
    if (this.config) {
      this.image = 'data:image/jpeg;base64,' + this.config.heroImage;
    }
  }

  onBook() {
    this.router.navigate(['/booking']);
  }

}
