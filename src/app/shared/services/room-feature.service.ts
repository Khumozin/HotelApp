import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { RoomFeature } from '../models/room-feature.model';

@Injectable({
  providedIn: 'root'
})
export class RoomFeatureService {

  private endPoint: string = environment.api;

  constructor(private http: HttpClient) { }

  fetchRoomFeatures(roomId): Observable<RoomFeature[]> {
    return this.http.get<RoomFeature[]>(`${this.endPoint}/RoomFeatures/GetByRoomID/` + roomId);
  }
}
