import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Offer} from "./offer.jsx";
import {PlaceType} from "../../const";
import {AuthenticationStatus} from "../../reducers/user/user.js";
import {Router} from "react-router-dom";
import history from "../../history.js";

const mockStore = configureStore([]);

const card = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  type: PlaceType.APARTMENT,
  picture: `img/apartment-01.jpg`,
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
  location: [52.3909553943508, 4.929309666406198],
  city: {name: `Amsterdam`}
};

const reviews = [
  {
    id: 1,
    date: `2019-04-24`,
    rating: 4,
    comment: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    user: {
      name: `Max`,
      avatar: `img/avatar-max.jpg`,
    }
  }
];

const nearbyPlaces = [
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    type: PlaceType.APARTMENT,
    picture: `img/apartment-02.jpg`,
    price: 132,
    rating: 3.2,
    isBookmarked: false,
    isPremium: false,
    guests: 2,
    bedrooms: 1,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    amenities: [
      `Wi-Fi`,
      `Coffee machine`,
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
    location: [52.3909553943508, 4.929309666406198],
    city: {name: `Amsterdam`, location: [52.37454, 4.897976]}
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: PlaceType.APARTMENT,
    picture: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    isBookmarked: false,
    isPremium: true,
    guests: 1,
    bedrooms: 1,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    amenities: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Coffee machine`,
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
    location: [52.3809553943508, 4.939309666406198],
    city: {name: `Amsterdam`, location: [52.37454, 4.897976]}
  }
];

const currentCity = {name: `Amsterdam`, location: [52.37454, 4.897976]};

const cityOffers = new Map([[`Amsterdam`, nearbyPlaces]]);

it(`Should render place card details correctly`, () => {
  const store = mockStore({
    DATA: {cityOffers, currentCity},
    USER: {authenticationStatus: AuthenticationStatus.AUTH, user: {email: `Oliver.conner@gmail.com`}}
  });
  const tree = renderer.create(
      <Provider store={store} >
        <Router history={history}>
          <Offer
            card={card}
            reviews={reviews}
            nearbyPlaces={nearbyPlaces}
            onReviewsLoad={() => {}}
            onNearbyPlacesLoad={() => {}}
            onReviewPost={() => {}}
            onToggleFavorite={() => {}}
            userStatus={`AUTH`}
          />
        </Router>
      </Provider>,
      {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
