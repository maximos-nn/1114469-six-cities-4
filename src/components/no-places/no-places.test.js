import React from "react";
import renderer from "react-test-renderer";
import NoPlaces from "./no-places.jsx";

it(`NoPlaces component should render correctly`, () => {
  const tree = renderer.create(<NoPlaces city={`Dusseldorf`} />).toJSON();
  expect(tree).toMatchSnapshot();
});
