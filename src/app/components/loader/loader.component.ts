import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  isBusy: boolean = false;
  isBusySub: Subscription;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.isBusySub = this.sharedService.isBusy
      .subscribe(val => {
        this.isBusy = val;
      });
  }

  ngOnDestroy() {
    if (this.isBusySub) {
      this.isBusySub.unsubscribe();
    }
  }

}
