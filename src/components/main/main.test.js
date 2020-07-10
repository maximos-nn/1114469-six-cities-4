import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {PlaceType} from "../../const";

const offers = [
  {
    id: 33,
    title: `Canal View Prinsengracht`,
    type: PlaceType.APARTMENT,
    picture: `apartment-02.jpg`,
    price: 467,
    rating: 3,
    isBookmarked: false,
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
  },
  {
    id: 44,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `apartment-03.jpg`,
    price: 205,
    rating: 4.4,
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
    location: [52.3909553943508, 4.85309666406198]
  }
];

it(`Render Main component`, () => {
  const tree = renderer.create(
      <Main places={offers} onPlaceTitleClick={() => {}} onBookmarkButtonClick={() => {}} />,
      {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
