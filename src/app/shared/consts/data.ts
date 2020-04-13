import { Rooms } from '../enums/rooms.enum';
import { Room } from '../models/room.model';

export const amenities = [
    {
        title: 'Spa',
        content: 'Enjoy massages and treatments from the wellness spa available in our Sandton facility.',
        image: 'https://img.icons8.com/clouds/100/000000/cocktail.png'
    },
    {
        title: '24H Security',
        content: `The hotel maintains 24-hour CCTV surveillance and electric
        fence to ensure the safety of our guests.`,
        image: 'https://img.icons8.com/clouds/100/000000/bullet-camera.png'
    },
    {
        title: 'Complimentary Wi-Fi',
        content: 'Enjoy free, fast and reliable internet connection so that you always stay connected.',
        image: 'https://img.icons8.com/clouds/100/000000/wifi.png'
    },
    {
        title: 'Backup Generator',
        content: 'We provide more than 12 hours back up electricity.',
        image: 'https://img.icons8.com/clouds/100/000000/lightning-bolt.png'
    },
    {
        title: 'Mini Gym',
        content: 'Stay fit and healthy by using our mini gym at Forest Sandown.',
        image: 'https://img.icons8.com/clouds/100/000000/exercise.png'
    },
    {
        title: 'Pool Access',
        content: 'Our swimming pool is crystal clear and cleaned 365 days a year.',
        image: 'https://img.icons8.com/clouds/100/000000/outdoor-swimming-pool.png'
    },
];

export const gallery = [
    {
        title: 'Executive Room',
        image: '../assets/img/Executive/Executive-Room-Couch.jpg',
        roomType: Rooms.Executive
    },
    {
        title: 'Penthouse',
        image: '../assets/img/Penthouse/Bedroom-1191x795.jpg',
        roomType: Rooms.Penthouse
    },
    {
        title: 'Luxury Room',
        image: '../assets/img/Luxury/Luxury-Room.jpg',
        roomType: Rooms.Luxury
    },
    {
        title: 'Economy Room',
        image: '../assets/img/Economy/thumbnail.jpg',
        roomType: Rooms.Economy
    },
    {
        title: 'Standard Room',
        image: '../assets/img/Standard/thumbnail.jpg',
        roomType: Rooms.Standard
    },
    {
        title: 'Bachelor Room',
        image: '../assets/img/Bachelor/thumbnail.jpg',
        roomType: Rooms.Bachelor
    },
];

export const features = [
    { text: '40 sqm living space' },
    { text: 'Coffee and Tea facilities' },
    { text: 'Complimentary WiFi' },
    { text: 'Flat TV' },
    { text: 'Premium Satellite Channels' },
    { text: 'Air condition for cold and heat' },
    { text: 'Microwave' },
    { text: '4 sets plates, water drinking glasses, wine glasses and mugs' },
    { text: 'King Bed or twin beds' },
    { text: 'Full bath: shower, bidet, bath, toilet and basin' },
    { text: 'Iron' },
    { text: 'Iron board' },
    { text: 'Single Door Fridge' },
    { text: 'Filter Coffee' },
    { text: 'Writing Desk' },
    { text: 'Private covered patio with a coffee table and 2 chairs' },
    { text: 'Garden View' },
    { text: 'Kitchenette' },
    { text: 'Sofa with coffee table' },
    { text: 'Digital Safe' },
];

export const room: Room[] = [
    {
        Title: 'Executive Rooms',
        Price: 'R890/night',
        RoomType: Rooms.Executive,
        Description: `This elegantly furnished air-conditioned en-suite room opens out onto a large (shared) terrace with
            river views. It sleeps two on a king sized bed. The
            spacious room includes a large lounge area with flat screen TV (DSTV) and small kitchenette. The
            luxurious bathroom has both walk-in shower and bathtub. Limited parking & unlimited WIFI.`,
        Images: [
            {
                path: '../assets/img/Executive/DSC1567.jpg'
            },
            {
                path: '../assets/img/Executive/DSC1570.jpg'
            },
            {
                path: '../assets/img/Executive/Executive-Bathroom.jpg'
            },
            {
                path: '../assets/img/Executive/Executive-Room-Couch.jpg'
            },
            {
                path: '../assets/img/Executive/Executive-Room-Kitchenette.jpg'
            },
            {
                path: '../assets/img/Executive/Executive-Room-overview.jpg'
            },
        ],
        FeaturesList: [
            { Text: '40 sqm living space' },
            { Text: 'Coffee and Tea facilities' },
            { Text: 'Complimentary WiFi' },
            { Text: 'Flat TV' },
            { Text: 'Premium Satellite Channels' },
            { Text: 'Air condition for cold and heat' },
            { Text: 'Microwave' },
            { Text: '4 sets plates, water drinking glasses, wine glasses and mugs' },
            { Text: 'King Bed or twin beds' },
            { Text: 'Full bath: shower, bidet, bath, toilet and basin' },
            { Text: 'Iron' },
            { Text: 'Iron board' },
            { Text: 'Single Door Fridge' },
            { Text: 'Filter Coffee' },
            { Text: 'Writing Desk' },
            { Text: 'Private covered patio with a coffee table and 2 chairs' },
            { Text: 'Garden View' },
            { Text: 'Kitchenette' },
            { Text: 'Sofa with coffee table' },
            { Text: 'Digital Safe' },
        ]
    },
    {
        Title: 'Penthouse',
        Price: 'R830/night',
        RoomType: Rooms.Penthouse,
        Description: `This elegantly furnished air-conditioned en-suite 
        room opens out onto a large private terrace with river views. It sleeps 
        two on a king sized bed. The room includes a small lounge area with flat screen TV (DSTV) 
            and small kitchenette. An extra single bed could be added 
            on request for an additional fee. Limited parking & unlimited WIFI.`,
        Images: [
            {
                path: '../assets/img/Penthouse/Balcony-from-Penthouse-1191x776.jpg'
            },
            {
                path: '../assets/img/Penthouse/Bathroom-1191x795.jpg'
            },
            {
                path: '../assets/img/Penthouse/Bedroom-1191x795.jpg'
            },
            {
                path: '../assets/img/Penthouse/BedroomKitchen-1191x795.jpg'
            },
            {
                path: '../assets/img/Penthouse/Kitchen-1191x795.jpg'
            },
            {
                path: '../assets/img/Penthouse/Patio-1-1191x795.jpg'
            },
            {
                path: '../assets/img/Penthouse/Patio-2-1191x795.jpg'
            },
            {
                path: '../assets/img/Penthouse/River-View-from-Penthouse-1191x772.jpg'
            },
        ],
        FeaturesList: [
            { Text: '25 sqm living space' },
            { Text: 'Coffee and Tea facilities' },
            { Text: 'Complimentary WiFi' },
            { Text: 'Flat TV' },
            { Text: 'Premium Satellite Channels' },
            { Text: 'Air condition for cold and heat' },
            { Text: 'Microwave' },
            { Text: '4 sets plates, water drinking glasses, wine glasses and mugs' },
            { Text: 'Double Bed' },
            { Text: 'Shower and Toilet and basin' },
            { Text: 'Iron' },
            { Text: 'Iron board' },
            { Text: 'Single Door Fridge' },
            { Text: 'Filter Coffee' },
            { Text: 'Writing Desk' },
            { Text: 'Private covered patio with a coffee table and 2 chairs' },
            { Text: 'Garden View' },
            { Text: 'Kitchenette' },
            { Text: 'Sofa with coffee table' },
            { Text: 'Digital Safe' },
        ]
    },
    {
        Title: 'Luxury Rooms',
        Price: 'R684/night',
        RoomType: Rooms.Luxury,
        Description: `This elegantly furnished air-conditioned en-suite room opens 
        out onto a large (shared) terrace with river views.  
        It sleeps two on a king sized bed. The room includes a lounge area 
        with flat screen TV (DSTV) and small kitchenette. An extra single 
        bed could be added on request for an additional fee. 
        Limited parking & unlimited WIFI.`,
        Images: [
            {
                path: '../assets/img/Luxury/DSC1522.jpg'
            },
            {
                path: '../assets/img/Luxury/DSC1523.jpg'
            },
            {
                path: '../assets/img/Luxury/DSC1538.jpg'
            },
            {
                path: '../assets/img/Luxury/DSC1565.jpg'
            },
            {
                path: '../assets/img/Luxury/Luxury-Room.jpg'
            },
        ],
        FeaturesList: [
            { Text: '25 sqm living space' },
            { Text: 'Coffee and Tea facilities' },
            { Text: 'Complimentary WiFi' },
            { Text: 'Flat TV' },
            { Text: 'Premium Satellite Channels' },
            { Text: 'Air condition for cold and heat' },
            { Text: 'Microwave' },
            { Text: 'Heating panel' },
            { Text: '4 sets plates, water drinking glasses, wine glasses and mugs' },
            { Text: 'Double Bed' },
            { Text: 'Iron' },
            { Text: 'Iron Board' },
            { Text: 'Single Door Fridge' },
            { Text: 'Filter Coffee' },
            { Text: 'Long writing table' },
            { Text: 'Private covered patio with a coffee table and 2 chairs' },
            { Text: 'Garden View' },
            { Text: 'Kitchennete' },
            { Text: 'Sofa with coffee table' },
            { Text: 'Digital Safe' },

        ]
    },
    {
        Title: 'Economy Rooms',
        Price: 'R618/night',
        RoomType: Rooms.Economy,
        Description: `This air-conditioned en-suite room 
        opens out onto a large (shared) terrace with river views.
         It sleeps two on a double bed.  The room includes 
         unlimited WIFI, a writing desk & chair, flat
         screen TV (DSTV) and small kitchenette. Limited parking available`,
        Images: [
            {
                path: '../assets/img/Economy/Balcony-1191x795.jpg'
            },
            {
                path: '../assets/img/Economy/DSC1384-1191x795.jpg'
            },
            {
                path: '../assets/img/Economy/DSC1387-1191x795.jpg'
            },
            {
                path: '../assets/img/Economy/DSC1391-1191x795.jpg'
            },
            {
                path: '../assets/img/Economy/DSC1394-1191x795.jpg'
            },
            {
                path: '../assets/img/Economy/Economy-Room-1191x795.jpg'
            },
            ,
            {
                path: '../assets/img/Economy/Entire-Room-1191x795.jpg'
            },
            {
                path: '../assets/img/Economy/Kitchen-Desk-1191x795.jpg'
            },
        ],
        FeaturesList: [
            { Text: '21 sqm living space' },
            { Text: 'Coffee and Tea facilities' },
            { Text: 'Complimentary WiFi' },
            { Text: 'Flat TV' },
            { Text: 'Premium Satellite Channels' },
            { Text: 'Air condition for cold and heat' },
            { Text: 'Microwave' },
            { Text: 'Heating panel' },
            { Text: '4 sets plates, water drinking glasses, wine glasses and mugs' },
            { Text: 'Double Bed' },
            { Text: 'Shower and Toilet and basin' },
            { Text: 'Iron' },
            { Text: 'Iron Board' },
            { Text: 'Bar Fridge' },
            { Text: 'Writing Dessk' },
            { Text: 'Private covered patio with a coffee table and 2 chairs' },
            { Text: 'Garden View' },
            { Text: 'Kitchennete' },
            { Text: 'Digital Safe' },

        ]
    },
    {
        Title: 'Standard Rooms',
        Price: 'R567/night',
        RoomType: Rooms.Standard,
        Description: `This air-conditioned en-suite room sleeps two on a double bed.  The room includes unlimited WIFI, a writing desk & chair, flat screen TV (openview channels only) and small kitchenette.  Limited parking available.`,
        Images: [
            {
                path: '../assets/img/Standard/Bathroom-1-1191x795.jpg'
            },
            {
                path: '../assets/img/Standard/Bedroom-1-1191x795.jpg'
            },
            {
                path: '../assets/img/Standard/Kitchen-1-1191x795.jpg'
            },
            {
                path: '../assets/img/Standard/Kitchen-Fridge-1191x795.jpg'
            },
            {
                path: '../assets/img/Standard/Standard-Room-2-1191x795.jpg'
            },
            {
                path: '../assets/img/Standard/Standard-Room-1191x795.jpg'
            },
        ],
        FeaturesList: [
            { Text: '21 sqm living space' },
            { Text: 'Coffee and Tea facilities' },
            { Text: 'Complimentary WiFi' },
            { Text: 'Flat TV' },
            { Text: 'Local 21 TV channels' },
            { Text: 'Air condition for cold and heat' },
            { Text: 'Microwave' },
            { Text: 'Heating panel' },
            { Text: '4 sets plates, water drinking glasses, wine glasses and mugs' },
            { Text: 'Double Bed' },
            { Text: 'Shower and Toilet and basin' },
            { Text: 'Iron' },
            { Text: 'Iron board' },
            { Text: 'Single Door Fridge' },
            { Text: 'Kitchenette' },
            { Text: 'Digital Safe' },
        ]
    },
    {
        Title: 'Bachelor Rooms',
        Price: 'R513/night',
        RoomType: Rooms.Bachelor,
        Description: `This air-conditioned en-suite room sleeps 
        two on a double bed.  The room includes unlimited WIFI, 
        a flap-down writing desk, flat screen TV (openview channels only) 
        and small kitchenette (no sink). Limited parking available.`,
        Images: [
            {
                path: '../assets/img/Bachelor/DSC1445.jpg'
            },
            {
                path: '../assets/img/Bachelor/DSC1447-992x795.jpg'
            },
            {
                path: '../assets/img/Bachelor/DSC1450-992x795.jpg'
            },
            {
                path: '../assets/img/Bachelor/DSC1455-992x795.jpg'
            },
        ],
        FeaturesList: [
            { Text: '15 sqm living space' },
            { Text: 'Coffee and Tea facilities' },
            { Text: 'Complimentary WiFi' },
            { Text: 'Flat TV' },
            { Text: 'Local 21 TV channels' },
            { Text: 'Air condition for cold and heat' },
            { Text: 'Microwave' },
            { Text: 'Heating panel' },
            { Text: '4 sets plates, water drinking glasses, wine glasses and mugs' },
            { Text: 'Double Bed' },
            { Text: 'Full bath: shower, bidet, bath, toilet and basin' },
            { Text: 'Iron' },
            { Text: 'Iron board' },
            { Text: 'Bar Fridge' },
            { Text: 'Frying pan' },
            { Text: 'Cooking pots' },
            { Text: 'Kitchenette' },
            { Text: 'Digital Safe' },
        ]
    },
];
