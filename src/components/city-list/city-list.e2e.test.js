import React from "react";
import {mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CityList} from "./city-list.jsx";

const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

const mockEvent = {
  preventDefault() {}
};

configure({adapter: new Adapter()});

it(`City links should be clicked`, () => {
  const onCityLinkClick = jest.fn();

  const cityLink = mount(
      <CityList cities={cities} activeCity={`Amsterdam`} onCityLinkClick={onCityLinkClick} />
  );

  const links = cityLink.find(`a`);
  links.forEach((link) => {
    link.simulate(`click`, mockEvent);
  });

  expect(onCityLinkClick).toHaveBeenCalledTimes(cities.length - 1);
});
