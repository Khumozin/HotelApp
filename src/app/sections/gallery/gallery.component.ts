import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GalleryItem } from '../../shared/models/gallery-item.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {

  @Input() galleryItems: GalleryItem[];
  items: GalleryItem[];

  galleryItemsFirstRow: any[];

  galleryItemsSecondRow: any[];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  ngOnChanges() {
    this.items = this.galleryItems;
    if (this.galleryItems) {
      this.galleryItemsFirstRow = this.galleryItems.slice(0, 3);
      this.galleryItemsSecondRow = this.galleryItems.slice(3)
    }
  }

  uploadImg(files) {
    let reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = () => {
      const res = this.base64ToBlob(reader.result);
      console.log(res);
    }

  }

  base64ToBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
  }

  onGalleryCardClicked(roomID) {
    console.log(roomID);
    this.router.navigate(['/room', roomID]);
  }

}
