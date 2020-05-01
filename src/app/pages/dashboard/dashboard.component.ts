import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menu = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onSwitch(selectedMenu) {
    this.menu = selectedMenu;
  }

}
