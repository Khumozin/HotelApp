import { Component, OnInit } from '@angular/core';
import { RoomType } from 'src/app/shared/models/room-type.model';
import { RoomTypeService } from 'src/app/shared/services/room-type.service';

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.scss']
})
export class RoomTypesComponent implements OnInit {

  roomTypes: RoomType[];
  tableHeadings: { Name: string }[] = [
    { Name: '#' },
    { Name: 'Name' },
  ];

  constructor(private roomTypeService: RoomTypeService) { }

  ngOnInit(): void {
    this.getRoomTypes();
  }

  getRoomTypes() {
    this.roomTypeService.fetchRoomTypes()
      .subscribe((items: RoomType[]) => {
        this.roomTypes = items;
        console.log(items);
      });
  }

}
