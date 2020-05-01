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
      Title: 'Room Types',
      Icon: 'https://img.icons8.com/clouds/100/000000/4-star-hotel.png',
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
      Icon: 'https://img.icons8.com/clouds/100/000000/4-star-hotel.png',
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
      Icon: 'https://img.icons8.com/clouds/100/000000/4-star-hotel.png',
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
      Icon: 'https://img.icons8.com/clouds/100/000000/4-star-hotel.png',
      Content: undefined
    },
    {
      ID: undefined,
      Title: 'Room Details',
      Icon: 'https://img.icons8.com/bubbles/100/000000/list.png',
      Content: undefined
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('main');
  }

  onCardClick() {
    this.router.navigate(['/roomtypes']);
  }

}
