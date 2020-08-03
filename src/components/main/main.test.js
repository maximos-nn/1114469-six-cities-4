import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";
import {PlaceType} from "../../const";

const mockStore = configureStore([]);

const offers = [
  {
    id: 33,
    title: `Canal View Prinsengracht`,
    type: PlaceType.APARTMENT,
    picture: `img/apartment-02.jpg`,
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
    location: [52.3809553943508, 4.939309666406198],
    city: {name: `Amsterdam`}
  },
  {
    id: 44,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `img/apartment-03.jpg`,
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
    location: [52.3909553943508, 4.85309666406198],
    city: {name: `Amsterdam`}
  }
];

const cityOffers = new Map([[`Amsterdam`, [...offers]]]);
const currentCity = {name: `Amsterdam`, location: [52.37454, 4.897976]};
const sortTypes = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

const storeObj = {DATA: {currentCity, cityOffers}, UI: {currentSortType: `Popular`, sortTypes}};

it(`Render Main component`, () => {
  const store = mockStore(storeObj);
  const tree = renderer.create(
      <Provider store={store}>
        <Main
          places={offers}
          city={`Amsterdam`}
          onPlaceTitleClick={() => {}}
          onBookmarkButtonClick={() => {}}
          onActiveItemChange={() => {}}
        />
      </Provider>,
      {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
