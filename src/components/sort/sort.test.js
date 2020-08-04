import React from "react";
import renderer from "react-test-renderer";
import {Sort} from "./sort.jsx";
import {SortType} from "../../const.js";

it(`Sort component should render correctly`, () => {
  const tree = renderer.create(
      <Sort
        types={Object.values(SortType)}
        activeType={SortType.POPULAR}
        onTypeChange={() => {}}
        toggle={false}
        onToggle={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
