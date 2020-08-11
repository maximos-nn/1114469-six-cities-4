import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form.jsx";

it(`ReviewForm should render correctly`, () => {
  const tree = renderer.create(
      <ReviewForm
        rating={2}
        comment={`Comment goes here`}
        isInvalid={false}
        isDisabled={false}
        onSubmit={() => {}}
        onRatingChange={() => {}}
        onCommentChange={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
