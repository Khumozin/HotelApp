export class GalleryItem {
    ID: string;
    Title: string;
    Thumbnail: Thumbnail;
    RoomTypeID: string
}

export class Thumbnail {
    data: any;
    contentType: string;
}

export class GalleryItemDetails {
    ID: string;
    GalleryItemID: string;
    Price: number;
    Content: string;
}

export class GalleryItemFeature {
    ID: string;
    GalleryItemID: string;
    Text: string;
}

export class GalleryItemImage {
    ID: string;
    GalleryItemID: string;
    Image: string;
}