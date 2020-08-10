import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {SignIn} from "./sign-in.jsx";
import {AuthenticationStatus} from "../../reducers/user/user";

const mockStore = configureStore([]);

const storeObj = {
  USER: {authenticationStatus: AuthenticationStatus.NO_AUTH, user: {}}
};

it(`SignIn component should render correctly`, () => {
  const store = mockStore(storeObj);
  const tree = renderer.create(
      <Provider store={store} >
        <SignIn onSignIn={() => {}} />
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
