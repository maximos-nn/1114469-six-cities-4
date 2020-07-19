import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {PlaceType} from "../../const";

const offers = [
  {
    id: 11,
    title: `Beautiful & luxurious apartment at great location`,
    type: PlaceType.APARTMENT,
    picture: `img/apartment-01.jpg`,
    price: 123,
    rating: 5,
    isBookmarked: false,
    isPremium: true,
    guests: 4,
    bedrooms: 3,
    description: `Description.`,
    amenities: [
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    photos: [
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    location: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 22,
    title: `Wood and stone place`,
    type: PlaceType.ROOM,
    picture: `img/room.jpg`,
    price: 456,
    rating: 3.6,
    isBookmarked: true,
    isPremium: false,
    guests: 4,
    bedrooms: 3,
    description: `Description.`,
    amenities: [
      `Cabel TV`,
      `Fridge`
    ],
    host: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    photos: [
      `img/studio-01.jpg`,
      `img/apartment-01.jpg`
    ],
    location: [52.3809553943508, 4.939309666406198]
  }
];

it(`Render App`, () => {
  const tree = renderer.create(
      <App places={offers} reviews={[]} />,
      {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
