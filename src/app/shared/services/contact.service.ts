import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';

import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends AppService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  submitMessage(data: Message) {
    const url = `${this.endPoint}/message`;
    return this.httpClient.post(url, data);
  }

}
