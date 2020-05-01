export class GalleryItem {
    ID: string;
    Title: string;
    Thumbnail: Thumbnail;
    RoomType: string
}

export class Thumbnail {
    data: any;
    contentType: string;
}

export class GalleryItemDetails {
    ID: string;
    GalleryItemID: string;
    Price: string;
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