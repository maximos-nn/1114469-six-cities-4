import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withToggle from "./with-toggle";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withToggle(MockComponent);

it(`Should toggle`, () => {
  const wrapper = shallow(<MockComponentWrapped />);
  expect(wrapper.props().toggle).toEqual(false);

  wrapper.props().onToggle();
  expect(wrapper.props().toggle).toEqual(true);

  wrapper.props().onToggle();
  expect(wrapper.props().toggle).toEqual(false);
});
