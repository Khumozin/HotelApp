import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss']
})
export class RoomInfoComponent implements OnInit {

  @Input() title: string;
  @Input() price: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
