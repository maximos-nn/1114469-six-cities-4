import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list.jsx";
import {PlaceType} from "../../const";

const LIST_CLASS_NAME = `cities__places-list tabs__content`;
const CARD_CLASS_NAME = `cities__place-card`;
const IMAGE_WRAPPER_CLASS_NAME = `cities__image-wrapper`;

const offers = [
  {
    id: 12,
    title: `Beautiful & luxurious apartment at great location`,
    type: PlaceType.APARTMENT,
    picture: `apartment-01.jpg`,
    price: 235,
    rating: 4,
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
    location: [52.3909553943508, 4.85309666406198],
    city: {name: `Amsterdam`}
  },
  {
    id: 32,
    title: `Canal View Prinsengracht`,
    type: PlaceType.APARTMENT,
    picture: `apartment-02.jpg`,
    price: 157,
    rating: 3.3,
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
    location: [52.369553943508, 4.85309666406198],
    city: {name: `Amsterdam`}
  },
  {
    id: 42,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `apartment-03.jpg`,
    price: 234,
    rating: 5,
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
    location: [52.3909553943508, 4.929309666406198],
    city: {name: `Amsterdam`}
  }
];

it(`Render place list`, () => {
  const tree = renderer.create(
      <PlaceList
        cardClass={CARD_CLASS_NAME}
        imageWrapperClass={IMAGE_WRAPPER_CLASS_NAME}
        listClass={LIST_CLASS_NAME}
        places={offers}
        events={{
          onCardMouseEnter: () => {},
          onCardMouseLeave: () => {},
          onPlaceTitleClick: () => {},
          onBookmarkButtonClick: () => {}
        }}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
