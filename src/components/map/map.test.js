import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const MAP_CLASS_NAME = `cities__map`;

const markers = [
  {
    location: [52.3909553943508, 4.85309666406198],
    active: false
  },
  {
    location: [52.369553943508, 4.85309666406198],
    active: false
  },
  {
    location: [52.3909553943508, 4.929309666406198],
    active: false
  }
];

it(`Map should render correctly`, () => {
  const tree = renderer.create(
      <Map mapClass={MAP_CLASS_NAME} markers={markers} />,
      {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
