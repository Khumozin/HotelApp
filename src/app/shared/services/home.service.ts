import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Amenity } from '../models/amenity.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private endPoint: string = environment.api;

  constructor(private httpClient: HttpClient) { }

  fetchAmenities(): Observable<Amenity[]> {
    return this.httpClient.get<Amenity[]>(`${this.endPoint}/amenity`);
  }
}
