import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const PLACES_COUNT = 312;
const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

Enzyme.configure({adapter: new Adapter()});

it(`Place title should be clicked`, () => {
  const onPlaceTitleClick = jest.fn();

  const main = shallow(
      <Main placesCount={PLACES_COUNT} placesTitles={titles} onPlaceTitleClick={onPlaceTitleClick} />
  );

  const placeTitles = main.find(`h2.place-card__name a`);
  placeTitles.forEach((title) => {
    title.simulate(`click`);
  });
  expect(onPlaceTitleClick).toHaveBeenCalledTimes(titles.length);
});
