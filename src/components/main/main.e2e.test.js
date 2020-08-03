import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";
import {PlaceType} from "../../const";

const mockStore = configureStore([]);

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
    location: [52.369553943508, 4.85309666406198],
    city: {name: `Amsterdam`}
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
    location: [52.3909553943508, 4.929309666406198],
    city: {name: `Amsterdam`}
  }
];

const cityOffers = new Map([[`Amsterdam`, offers]]);
const currentCity = {name: `Amsterdam`, location: [52.37454, 4.897976]};
const sortTypes = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

Enzyme.configure({adapter: new Adapter()});

it(`Place title should be clicked`, () => {
  const store = mockStore({currentCity, cityOffers, currentSortType: `Popular`, sortTypes});
  const onPlaceTitleClick = jest.fn();

  const main = mount(
      <Provider store={store} >
        <Main
          places={offers}
          city={`Amsterdam`}
          onPlaceTitleClick={onPlaceTitleClick}
          onBookmarkButtonClick={() => {}}
          onActiveItemChange={() => {}}
        />
      </Provider>
  );

  const placeTitles = main.find(`h2.place-card__name a`);
  placeTitles.forEach((title) => {
    title.simulate(`click`);
  });
  expect(onPlaceTitleClick).toHaveBeenCalledTimes(offers.length);
});

it(`Bookmark should be clicked`, () => {
  const store = mockStore({currentCity, cityOffers, currentSortType: `Popular`, sortTypes});
  const onBookmarkButtonClick = jest.fn();

  const main = mount(
      <Provider store={store} >
        <Main
          places={offers}
          city={`Amsterdam`}
          onPlaceTitleClick={() => {}}
          onBookmarkButtonClick={onBookmarkButtonClick}
          onActiveItemChange={() => {}}
        />
      </Provider>
  );

  const bookmarks = main.find(`.place-card__bookmark-button`);
  bookmarks.forEach((title) => {
    title.simulate(`click`);
  });
  expect(onBookmarkButtonClick).toHaveBeenCalledTimes(offers.length);
});
