import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";
import {PlaceType} from "../../const";

const card = {
  id: 14,
  title: `Beautiful & luxurious apartment at great location`,
  type: PlaceType.APARTMENT,
  picture: `apartment-01.jpg`,
  price: 235,
  rating: 4.2,
  isBookmarked: true,
  isPremium: true
};

configure({adapter: new Adapter()});

it(`Hovering over place card should pass correct card object to callback`, () => {
  const onCardMouseEnter = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        card={card}
        events={{
          onCardMouseEnter,
          onCardMouseLeave: () => {},
          onBookmarkButtonClick: () => {},
          onPlaceTitleClick: () => {}
        }}
      />
  );

  const cardElement = placeCard.find(`.place-card`);
  cardElement.simulate(`mouseenter`);

  expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
  expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(card);
});
