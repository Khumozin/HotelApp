import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { RoomImage } from '../models/room-image.model';

@Injectable({
  providedIn: 'root'
})
export class RoomImageService {

  private endPoint: string = environment.api;

  constructor(private http: HttpClient) { }

  fetchRoomFeatures(roomId): Observable<RoomImage[]> {
    return this.http.get<RoomImage[]>(`${this.endPoint}/RoomImages/GetByRoomID/` + roomId);
  }
}
