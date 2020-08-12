import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change active item`, () => {
  const wrapper = shallow(<MockComponentWrapped />);
  expect(wrapper.props().activeItem).toEqual(null);

  wrapper.props().onActiveItemChange({id: 1});
  expect(wrapper.props().activeItem).toEqual({id: 1});

  wrapper.props().onActiveItemChange({id: 2});
  expect(wrapper.props().activeItem).toEqual({id: 2});

  wrapper.props().onActiveItemChange(null);
  expect(wrapper.props().activeItem).toEqual(null);
});
