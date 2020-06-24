import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import {PlaceType} from "../../const";

const card = {
  id: 14,
  title: `Beautiful & luxurious apartment at great location`,
  type: PlaceType.APARTMENT,
  picture: `apartment-01.jpg`,
  price: 235,
  rating: 4.2,
  isBookmarked: true,
  isPremium: true
};

it(`Should render place card correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        card={card}
        events={{
          onCardMouseEnter: () => {},
          onCardMouseLeave: () => {},
          onBookmarkButtonClick: () => {},
          onPlaceTitleClick: () => {}
        }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
