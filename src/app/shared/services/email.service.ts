import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { EmailForSave } from '../models/email-for-save.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

  addEmail(email: EmailForSave): Observable<EmailForSave> {
    email.SystemConfigID = environment.systemConfig;
    return this.http.post<EmailForSave>(`${this.api}/emails`, email);
  }
}
