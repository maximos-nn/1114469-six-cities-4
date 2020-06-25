import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";
import {PlaceType} from "../../const";

const offers = [
  {
    id: 12,
    title: `Beautiful & luxurious apartment at great location`,
    type: PlaceType.APARTMENT,
    picture: `apartment-01.jpg`,
    price: 235,
    rating: 4,
    isBookmarked: false,
    isPremium: true
  },
  {
    id: 32,
    title: `Canal View Prinsengracht`,
    type: PlaceType.APARTMENT,
    picture: `apartment-02.jpg`,
    price: 157,
    rating: 3.3,
    isBookmarked: false,
    isPremium: false
  },
  {
    id: 42,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `apartment-03.jpg`,
    price: 234,
    rating: 5,
    isBookmarked: true,
    isPremium: true
  }
];

it(`Render places list`, () => {
  const tree = renderer.create(<PlacesList places={offers} onPlaceTitleClick={() => {}} onBookmarkButtonClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
