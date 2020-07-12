import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import {PlaceType} from "../../const";

const card = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  type: PlaceType.APARTMENT,
  picture: `apartment-01.jpg`,
  price: 120,
  rating: 4.8,
  isBookmarked: false,
  isPremium: true,
  guests: 4,
  bedrooms: 3,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  amenities: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`
  ],
  host: {
    name: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: true
  },
  photos: [
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`
  ],
  location: [52.3909553943508, 4.929309666406198]
};

it(`Should render place card details correctly`, () => {
  const tree = renderer.create(<Offer card={card} />).toJSON();
  expect(tree).toMatchSnapshot();
});
