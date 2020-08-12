import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import FavoritesEmpty from "./favorites-empty.jsx";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureStore([]);

it(`Should render empty favorite list correctly`, () => {
  const store = mockStore({USER: {authenticationStatus: `AUTH`, user: {email: `test@test.com`}}});
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesEmpty />
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
