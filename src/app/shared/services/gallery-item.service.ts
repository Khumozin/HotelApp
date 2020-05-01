import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GalleryItem } from '../models/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryItemService {

  private endPoint: string = environment.api;

  constructor(private httpClient: HttpClient) { }

  fetchGalleryItems(): Observable<GalleryItem[]> {
    const url = `${this.endPoint}/galleryItem`;
    return this.httpClient.get<GalleryItem[]>(url);
  }

  fetchGalleryItem(roomID: string): Observable<GalleryItem> {
    const url = `${this.endPoint}/galleryItem/${roomID}`;
    return this.httpClient.get<GalleryItem>(url);
  }
}
