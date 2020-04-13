import { Rooms } from '../enums/rooms.enum';

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

export const room = [
    {
        title: 'Executive Rooms',
        price: 'R890/night',
        roomType: Rooms.Executive,
        description: `This elegantly furnished air-conditioned en-suite room opens out onto a large (shared) terrace with
            river views. It sleeps two on a king sized bed. The
            spacious room includes a large lounge area with flat screen TV (DSTV) and small kitchenette. The
            luxurious bathroom has both walk-in shower and bathtub. Limited parking & unlimited WIFI.`,
        images: [
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
        ]
    }
];
