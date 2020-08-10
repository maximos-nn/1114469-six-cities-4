import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";
import {AuthenticationStatus} from "../../reducers/user/user";

it(`Header without authenticated user should render correctly`, () => {
  const tree = renderer.create(
      <Header
        isMain={false}
        userStatus={AuthenticationStatus.NO_AUTH}
        email={``}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Header with authenticated user should render correctly`, () => {
  const tree = renderer.create(
      <Header
        isMain={false}
        userStatus={AuthenticationStatus.AUTH}
        email={`test@gmail.com`}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Header of main page should render correctly`, () => {
  const tree = renderer.create(
      <Header
        isMain={true}
        userStatus={AuthenticationStatus.AUTH}
        email={`test@gmail.com`}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
