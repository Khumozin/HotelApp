import { Component, Input, OnInit } from '@angular/core';
import { SystemConfig } from 'src/app/shared/models/system-config.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @Input() config: SystemConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
