import { Component, OnInit } from '@angular/core';

declare const M: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  instance: any;

  constructor() { }

  ngOnInit(): void {
    this.initNavbar();
  }

  initNavbar() {
    //sidenav
    const sidenav = document.querySelector('.sidenav');
    this.instance = M.Sidenav.init(sidenav, {});
  }

  onCloseSidenav() {
    this.instance.close();
  }

}
