import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import {PlaceType} from "../../const";

const offers = [
  {
    id: 10,
    title: `Beautiful & luxurious apartment at great location`,
    type: PlaceType.APARTMENT,
    picture: `img/apartment-01.jpg`,
    price: 326,
    rating: 2.5,
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
    location: [52.369553943508, 4.85309666406198]
  },
  {
    id: 40,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `img/apartment-03.jpg`,
    price: 131,
    rating: 5,
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
    location: [52.3909553943508, 4.929309666406198]
  }
];

Enzyme.configure({adapter: new Adapter()});

it(`Place title should be clicked`, () => {
  const onPlaceTitleClick = jest.fn();

  const main = mount(
      <Main places={offers} onPlaceTitleClick={onPlaceTitleClick} onBookmarkButtonClick={() => {}} />
  );

  const placeTitles = main.find(`h2.place-card__name a`);
  placeTitles.forEach((title) => {
    title.simulate(`click`);
  });
  expect(onPlaceTitleClick).toHaveBeenCalledTimes(offers.length);
});

it(`Bookmark should be clicked`, () => {
  const onBookmarkButtonClick = jest.fn();

  const main = mount(
      <Main places={offers} onPlaceTitleClick={() => {}} onBookmarkButtonClick={onBookmarkButtonClick} />
  );

  const bookmarks = main.find(`.place-card__bookmark-button`);
  bookmarks.forEach((title) => {
    title.simulate(`click`);
  });
  expect(onBookmarkButtonClick).toHaveBeenCalledTimes(offers.length);
});
