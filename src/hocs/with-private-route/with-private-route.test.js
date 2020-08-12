import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history";
import withPrivateRoute from "./with-private-route";

const mockStore = configureStore([]);

const MockComponent = () => <div />;
const MockComponentWrapped = withPrivateRoute(MockComponent, `AUTH`, `/login`);

it(`Wrapped component renders correctly`, () => {
  const store = mockStore({USER: {authenticationStatus: `AUTH`}});
  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <MockComponentWrapped />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
