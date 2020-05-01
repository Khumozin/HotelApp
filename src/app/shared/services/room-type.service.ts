import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { RoomType } from '../models/room-type.model';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  private endPoint: string = environment.api;

  constructor(private httpClient: HttpClient) { }

  fetchRoomTypes(): Observable<RoomType[]> {
    const url = `${this.endPoint}/roomType`;
    return this.httpClient.get<RoomType[]>(url);
  }
}
