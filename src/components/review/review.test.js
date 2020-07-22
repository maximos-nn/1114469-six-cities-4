import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  id: 1,
  date: `2019-04-24`,
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  user: {
    name: `Max`,
    avatar: `img/avatar-max.jpg`,
  }
};

it(`Review should render correctly`, () => {
  const tree = renderer.create(<Review review={review} />).toJSON();
  expect(tree).toMatchSnapshot();
});
