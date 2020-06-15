import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const PLACES_COUNT = 312;
const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

it(`Render Main component`, () => {
  const tree = renderer.create(<Main placesCount={PLACES_COUNT} placesTitles={titles} onPlaceTitleClick={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
