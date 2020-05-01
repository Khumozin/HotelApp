import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Amenity } from 'src/app/shared/models/amenity.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  MenuItems: Amenity[] = [
    {
      ID: undefined,
      Title: 'Amenities',
      Icon: 'https://img.icons8.com/bubbles/100/000000/trust.png',
      Content: undefined
    },
    {
      ID: undefined,
      Title: 'Room Details',
      Icon: 'https://img.icons8.com/bubbles/100/000000/list.png',
      Content: undefined
    },
    {
      ID: undefined,
      Title: 'Room Types',
      Icon: 'https://img.icons8.com/bubbles/100/000000/bed.png',
      Content: undefined
    },
    {
      ID: undefined,
      Title: 'Gallery',
      Icon: 'https://img.icons8.com/bubbles/100/000000/stack-of-photos.png',
      Content: undefined
    },
    {
      ID: undefined,
      Title: 'Bookings',
      Icon: 'https://img.icons8.com/bubbles/100/000000/ticket.png',
      Content: undefined
    },
    {
      ID: undefined,
      Title: 'Messages',
      Icon: 'https://img.icons8.com/bubbles/100/000000/messaging-.png',
      Content: undefined
    },
    {
      ID: undefined,
      Title: 'Users',
      Icon: 'https://img.icons8.com/bubbles/100/000000/lock-female-user.png',
      Content: undefined
    },
    {
      ID: undefined,
      Title: 'Settings',
      Icon: 'https://img.icons8.com/bubbles/100/000000/settings.png',
      Content: undefined
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('main');
  }

  onCardClick(index: number) {
    let path = '';
    switch (index) {
      case 1:
        path = 'roomdetails';
        break;
      case 2:
        path = 'roomtypes';
        break;
      case 3:
        path = 'gallery';
        break;
      case 4:
        path = 'bookings';
        break;
      case 5:
        path = 'messages';
        break;
      case 6:
        path = 'users';
        break;
      case 7:
        path = 'settings';
        break;
      case 0:
      default:
        path = 'amenities';
        break;
    }

    this.router.navigate([`/dashboard/${path}`]);
  }

}
