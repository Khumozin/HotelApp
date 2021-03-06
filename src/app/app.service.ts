import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { SystemConfig } from './shared/models/system-config.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private endPoint: string = environment.api;
  private systemConfig: string = environment.systemConfig;

  constructor(private http: HttpClient) { }

  fetchSystemConfig(): Observable<SystemConfig> {
    return this.http.get<SystemConfig>(`${this.endPoint}/SystemConfigs/` + this.systemConfig);
  }
}
