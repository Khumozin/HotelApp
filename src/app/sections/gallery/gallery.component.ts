import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() galleryItems: any[];

  galleryItemsFirstRow: any[];

  galleryItemsSecondRow: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.galleryItems) {
      this.galleryItemsFirstRow = this.galleryItems.slice(0, 3);
      this.galleryItemsSecondRow = this.galleryItems.slice(3)
    }
  }

  onGalleryCardClicked(roomType) {
    this.router.navigate(['/room', roomType]);
  }

}
