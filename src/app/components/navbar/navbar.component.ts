import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const M: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  instance: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initNavbar();
    this.initDropdown();
  }

  initNavbar() {
    //sidenav
    const sidenav = document.querySelector('.sidenav');
    this.instance = M.Sidenav.init(sidenav, {});
  }

  initDropdown() {
    const dropdown = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(dropdown, {})
  }

  onCloseSidenav() {
    this.instance.close();
  }

  onOpenCart() {
    this.onCloseSidenav();
    this.router.navigate(['/cart']);
  }

}
