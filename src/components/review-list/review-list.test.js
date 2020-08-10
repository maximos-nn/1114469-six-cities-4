import React from "react";
import renderer from "react-test-renderer";
import {ReviewList} from "./review-list.jsx";
import { AuthenticationStatus } from "../../reducers/user/user.js";

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
  },
  {
    id: 2,
    date: `2020-07-16`,
    rating: 3,
    comment: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    user: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
    }
  }
];

it(`Review list should render correctly`, () => {
  const tree = renderer.create(
      <ReviewList reviews={reviews} userStatus={AuthenticationStatus.AUTH} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
