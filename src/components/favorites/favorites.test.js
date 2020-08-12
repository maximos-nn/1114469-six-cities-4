import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Favorites} from "./favorites.jsx";
import {PlaceType} from "../../const.js";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureStore([]);

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
  const store = mockStore({USER: {authenticationStatus: `AUTH`, user: {email: `test@test.com`}}});
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Favorites places={[card]} cities={[`Amsterdam`]} onLoadFavorites={() => {}} />
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
