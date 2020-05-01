import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {

  @Input() columns: { Name: string }[];
  @Input() items: any[];
  dataItems: any[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.dataItems = this.items;
  }

}
