import { GalleryItemFeature, GalleryItemImage } from './gallery-item.model';

export class Room {
    Title: string;
    Price: number;
    RoomTypeID: string;
    Description: string;
    Images: GalleryItemImage[];
    FeaturesList: GalleryItemFeature[];
}
