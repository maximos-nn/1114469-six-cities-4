import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import {PlaceType} from "../../const";

const CARD_CLASS_NAME = `cities__place-card`;
const IMAGE_WRAPPER_CLASS_NAME = `cities__image-wrapper`;

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

it(`Should render place card correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        cardClass={CARD_CLASS_NAME}
        imageWrapperClass={IMAGE_WRAPPER_CLASS_NAME}
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
