import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {SignIn} from "./sign-in.jsx";
import {AuthenticationStatus} from "../../reducers/user/user";
import {Router} from "react-router-dom";
import history from "../../history.js";

const mockStore = configureStore([]);

const storeObj = {
  USER: {authenticationStatus: AuthenticationStatus.NO_AUTH, user: {}}
};

it(`SignIn component should render correctly`, () => {
  const store = mockStore(storeObj);
  const tree = renderer.create(
      <Provider store={store} >
        <Router history={history}>
          <SignIn onSignIn={() => {}} />
        </Router>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
