import {PlaceType} from "../const";

export default [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    type: PlaceType.APARTMENT,
    picture: `apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    isBookmarked: false,
    isPremium: true,
    guests: 4,
    bedrooms: 3,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    amenities: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    location: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    title: `Wood and stone place`,
    type: PlaceType.ROOM,
    picture: `room.jpg`,
    price: 80,
    rating: 4,
    isBookmarked: true,
    isPremium: false,
    guests: 1,
    bedrooms: 1,
    description: `Wood and stone place.`,
    amenities: [],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    photos: [
      `img/room.jpg`,
      `img/studio-01.jpg`
    ],
    location: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    type: PlaceType.APARTMENT,
    picture: `apartment-02.jpg`,
    price: 132,
    rating: 3.2,
    isBookmarked: false,
    isPremium: false,
    guests: 2,
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    amenities: [
      `Wi-Fi`,
      `Coffee machine`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    location: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `apartment-03.jpg`,
    price: 180,
    rating: 5,
    isBookmarked: false,
    isPremium: true,
    guests: 1,
    bedrooms: 1,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    amenities: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Coffee machine`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    photos: [
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    location: [52.3809553943508, 4.939309666406198]
  }
];
