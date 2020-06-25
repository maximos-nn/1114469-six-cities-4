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
    isPremium: false
  },
  {
    id: 44,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `apartment-03.jpg`,
    price: 205,
    rating: 4.4,
    isBookmarked: false,
    isPremium: true
  }
];

it(`Render Main component`, () => {
  const tree = renderer.create(<Main places={offers} onPlaceTitleClick={() => {}} onBookmarkButtonClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
