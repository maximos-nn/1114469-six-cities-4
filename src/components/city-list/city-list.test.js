import React from "react";
import renderer from "react-test-renderer";
import {CityList} from "./city-list.jsx";

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

it(`CityList component should render correctly`, () => {
  const tree = renderer.create(
      <CityList cities={cities} activeCity={`Amsterdam`} onCityLinkClick={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
