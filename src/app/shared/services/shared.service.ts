import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _isBusy = new BehaviorSubject(false);
  isBusy = this._isBusy.asObservable();

  constructor() { }

  setIsBusy(state: boolean) {
    this._isBusy.next(state);
  }
}
