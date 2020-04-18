import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rooms } from 'src/app/shared/enums/rooms.enum';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBook() {
    this.router.navigate(['/booking', Rooms.Executive]);
  }

}
