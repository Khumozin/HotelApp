import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})
export class SmtpService {

  url = environment.smtp;

  constructor(private http: HttpClient) { }

  sendEmail(email: Email): Observable<any> {
    return this.http.post(`${this.url}/send`, email);
  }
}
