import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppService } from '../../app.service';
import { GalleryItemDetails, GalleryItemFeature, GalleryItemImage } from '../models/gallery-item.model';
import { Room } from '../models/room.model';
import { GalleryItemService } from './gallery-item.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends AppService {

  constructor(
    private httpClient: HttpClient,
    private galleryItemService: GalleryItemService) {
    super();
  }


  fetchRoomDetails(roomID: string): Observable<Room> {
    const room = this.galleryItemService.fetchGalleryItem(roomID);
    const roomDetails = this.fetchRoomDetailsByGalleryItemID(roomID);
    const roomFeatures = this.fetchRoomFeaturesByRoomID(roomID);
    const roomImages = this.fetchRoomImagesByRoomID(roomID);

    return forkJoin([room, roomDetails, roomFeatures, roomImages])
      .pipe(
        map(res => {
          return {
            Title: res[0].Title,
            RoomTypeID: res[0].RoomTypeID,
            Price: res[1].Price,
            Description: res[1].Content,
            FeaturesList: [...res[2]],
            Images: [...res[3]]
          } as Room;
        })
      );
  }

  fetchRoomDetailsByGalleryItemID(roomID: string): Observable<GalleryItemDetails> {
    const url = `${this.endPoint}/galleryItemDetailsByGalleryItemID/${roomID}`;
    return this.httpClient.get<GalleryItemDetails>(url);
  }

  fetchRoomFeaturesByRoomID(roomID: string): Observable<GalleryItemFeature[]> {
    const url = `${this.endPoint}/galleryItemFeatureByGalleryItemID/${roomID}`;
    return this.httpClient.get<GalleryItemFeature[]>(url);
  }

  fetchRoomImagesByRoomID(roomID: string): Observable<GalleryItemImage[]> {
    const url = `${this.endPoint}/galleryItemImageByGalleryItemID/${roomID}`;
    return this.httpClient.get<GalleryItemImage[]>(url);
  }
}
