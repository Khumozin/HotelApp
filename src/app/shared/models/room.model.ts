import { GalleryItemFeature, GalleryItemImage } from './gallery-item.model';

export class Room {
    Title: string;
    Price: string;
    RoomTypeID: string;
    Description: string;
    Images: GalleryItemImage[];
    FeaturesList: GalleryItemFeature[];
}
