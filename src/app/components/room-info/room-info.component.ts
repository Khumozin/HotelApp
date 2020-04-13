import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss']
})
export class RoomInfoComponent implements OnInit {

  @Input() title: string;
  @Input() price: string;
  @Input() description: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBookNow() {
    this.router.navigate(['/booking']);
  }

}
