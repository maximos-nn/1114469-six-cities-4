import React from "react";
import renderer from "react-test-renderer";
import FavoriteCard from "./favorite-card.jsx";
import {PlaceType} from "../../const.js";
import {Router} from "react-router-dom";
import history from "../../history";

const card = {
  id: 14,
  title: `Beautiful & luxurious apartment at great location`,
  type: PlaceType.APARTMENT,
  picture: `img/apartment-01.jpg`,
  price: 235,
  rating: 4.2,
  isBookmarked: true,
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
  location: [52.3809553943508, 4.939309666406198],
  city: {name: `Amsterdam`}
};

it(`Should render favorite card correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <FavoriteCard card={card} />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
