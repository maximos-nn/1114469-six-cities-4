import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CityLink from "./city-link.jsx";

const mockEvent = {
  preventDefault() {}
};

configure({adapter: new Adapter()});

it(`Click on city link should pass correct city name to callback`, () => {
  const onCityLinkClick = jest.fn();

  const cityLink = shallow(
      <CityLink active={false} city={`Amsterdam`} onClick={onCityLinkClick} />
  );

  const link = cityLink.find(`a`);
  link.simulate(`click`, mockEvent);

  expect(onCityLinkClick).toHaveBeenCalledTimes(1);
  expect(onCityLinkClick).toHaveBeenCalledWith(`Amsterdam`);
});

it(`Click on active city link should not run a callback`, () => {
  const onCityLinkClick = jest.fn();

  const cityLink = shallow(
      <CityLink active={true} city={`Amsterdam`} onClick={onCityLinkClick} />
  );

  const link = cityLink.find(`a`);
  link.simulate(`click`, mockEvent);

  expect(onCityLinkClick).not.toHaveBeenCalled();
});
