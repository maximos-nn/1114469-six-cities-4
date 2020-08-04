import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import {PlaceType} from "../../const";

const mockStore = configureStore([]);

const offers = [
  {
    id: 11,
    title: `Beautiful & luxurious apartment at great location`,
    type: PlaceType.APARTMENT,
    picture: `img/apartment-01.jpg`,
    price: 123,
    rating: 5,
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
    location: [52.3909553943508, 4.929309666406198],
    city: {name: `Amsterdam`}
  },
  {
    id: 22,
    title: `Wood and stone place`,
    type: PlaceType.ROOM,
    picture: `img/room.jpg`,
    price: 456,
    rating: 3.6,
    isBookmarked: true,
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

const storeObj = {DATA: {currentCity, cityOffers}, UI: {currentSortType: `Popular`, sortTypes}};

it(`Render App`, () => {
  const store = mockStore(storeObj);
  const tree = renderer.create(
      <Provider store={store} >
        <App places={offers} city={`Amsterdam`} reviews={[]} nearbyPlaces={[]} onPlaceTitleClick={() => {}} />
      </Provider>,
      {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
