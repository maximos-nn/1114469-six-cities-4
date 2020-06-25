import {PlaceType} from "../const";

export default [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    type: PlaceType.APARTMENT,
    picture: `apartment-01.jpg`,
    price: 120,
    rating: 4,
    isBookmarked: false,
    isPremium: true
  },
  {
    id: 2,
    title: `Wood and stone place`,
    type: PlaceType.ROOM,
    picture: `room.jpg`,
    price: 80,
    rating: 4,
    isBookmarked: true,
    isPremium: false
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    type: PlaceType.APARTMENT,
    picture: `apartment-02.jpg`,
    price: 132,
    rating: 4,
    isBookmarked: false,
    isPremium: false
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `apartment-03.jpg`,
    price: 180,
    rating: 5,
    isBookmarked: false,
    isPremium: true
  }
];
