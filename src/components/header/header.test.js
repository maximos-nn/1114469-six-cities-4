import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";
import {AuthenticationStatus} from "../../reducers/user/user";
import {Router} from "react-router-dom";
import history from "../../history.js";

it(`Header without authenticated user should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Header
          isMain={false}
          userStatus={AuthenticationStatus.NO_AUTH}
          email={``}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Header with authenticated user should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Header
          isMain={false}
          userStatus={AuthenticationStatus.AUTH}
          email={`test@gmail.com`}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Header of main page should render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Header
          isMain={true}
          userStatus={AuthenticationStatus.AUTH}
          email={`test@gmail.com`}
        />
      </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
