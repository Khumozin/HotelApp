import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private endPoint: string = environment.api;
  private systemConfig: string = environment.systemConfig;

  constructor(private http: HttpClient) { }

  fetchRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.endPoint}/Rooms/GetBySystemConfigID/` + this.systemConfig);
  }

  fetchRoom(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.endPoint}/Rooms/` + id);
  }
}
