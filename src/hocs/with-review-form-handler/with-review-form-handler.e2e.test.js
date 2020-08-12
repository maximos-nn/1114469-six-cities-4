import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewFormHandler from "./with-review-form-handler";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withReviewFormHandler(MockComponent);
const mockComment = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`;

it(`Should set initial props`, () => {
  const wrapper = shallow(<MockComponentWrapped onReviewPost={() => {}} />);
  expect(wrapper.props().rating).toEqual(0);
  expect(wrapper.props().comment).toEqual(``);
  expect(wrapper.props().isInvalid).toEqual(true);
  expect(wrapper.props().isDisabled).toEqual(false);
});

it(`Should change rating`, () => {
  const wrapper = shallow(<MockComponentWrapped onReviewPost={() => {}} />);

  wrapper.props().onRatingChange({target: {value: `1`}});
  expect(wrapper.props().rating).toEqual(1);
});

it(`Should change comment`, () => {
  const wrapper = shallow(<MockComponentWrapped onReviewPost={() => {}} />);

  wrapper.props().onCommentChange({target: {value: mockComment}});
  expect(wrapper.props().comment).toEqual(mockComment);
});

it(`Should validate form`, () => {
  const wrapper = shallow(<MockComponentWrapped onReviewPost={() => {}} />);

  wrapper.props().onRatingChange({target: {value: `1`}});
  expect(wrapper.props().rating).toEqual(1);

  wrapper.props().onCommentChange({target: {value: mockComment}});
  expect(wrapper.props().isInvalid).toEqual(false);

  wrapper.props().onCommentChange({target: {value: ``}});
  expect(wrapper.props().isInvalid).toEqual(true);
});
