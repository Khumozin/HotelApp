import { Rooms } from '../enums/rooms.enum';

export class Room {
    Title: string;
    Price: string;
    RoomType: Rooms;
    Description: string;
    Images: any[];
    FeaturesList: { Text: string }[];
}
