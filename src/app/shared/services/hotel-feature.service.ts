import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HotelFeature } from '../models/hotel-feature.model';

@Injectable({
  providedIn: 'root'
})
export class HotelFeatureService {

  private endPoint: string = environment.api;
  private systemConfig: string = environment.systemConfig;

  constructor(private http: HttpClient) { }

  fetchHotelFeatures(): Observable<HotelFeature[]> {
    return this.http.get<HotelFeature[]>(`${this.endPoint}/HotelFeatures/GetBySystemConfigID/` + this.systemConfig);
  }
}
