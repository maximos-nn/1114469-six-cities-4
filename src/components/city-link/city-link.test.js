import React from "react";
import renderer from "react-test-renderer";
import CityLink from "./city-link.jsx";

it(`CityLink component should render correctly`, () => {
  const tree = renderer.create(
      <CityLink active={false} city={`Amsterdam`} onClick={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Active CityLink component should render correctly`, () => {
  const tree = renderer.create(
      <CityLink active={true} city={`Amsterdam`} onClick={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

