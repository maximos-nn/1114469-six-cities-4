import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {PlaceType} from "../../const";

const offers = [
  {
    id: 11,
    title: `Beautiful & luxurious apartment at great location`,
    type: PlaceType.APARTMENT,
    picture: `apartment-01.jpg`,
    price: 123,
    rating: 5,
    isBookmarked: false,
    isPremium: true
  },
  {
    id: 22,
    title: `Wood and stone place`,
    type: PlaceType.ROOM,
    picture: `room.jpg`,
    price: 456,
    rating: 3.6,
    isBookmarked: true,
    isPremium: false
  }
];

it(`Render App`, () => {
  const tree = renderer.create(<App places={offers} />).toJSON();
  expect(tree).toMatchSnapshot();
});
