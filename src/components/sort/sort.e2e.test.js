import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./sort.jsx";
import {SortType} from "../../const";

configure({adapter: new Adapter()});

it(`Click on sort options toggle should run a callback`, () => {
  const onToggleClick = jest.fn();

  const sort = mount(
      <Sort
        types={Object.values(SortType)}
        activeType={SortType.POPULAR}
        onTypeChange={() => {}}
        toggle={false}
        onToggle={onToggleClick}
      />
  );

  const toggle = sort.find(`.places__sorting-type`);
  toggle.simulate(`click`);

  expect(onToggleClick).toHaveBeenCalledTimes(1);
});

it(`Click on sort option should run a callback`, () => {
  const onItemClick = jest.fn();

  const sort = mount(
      <Sort
        types={Object.values(SortType)}
        activeType={SortType.POPULAR}
        onTypeChange={onItemClick}
        toggle={false}
        onToggle={() => {}}
      />
  );

  const items = sort.find(`li`);
  items.forEach((item) => {
    item.simulate(`click`);
  });

  expect(onItemClick).toHaveBeenCalledTimes(Object.values(SortType).length);
});
