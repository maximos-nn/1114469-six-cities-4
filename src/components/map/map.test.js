import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Map from "./map.jsx";

const MAP_CLASS_NAME = `cities__map`;

const mockStore = configureStore([]);

const markers = [
  {
    location: [52.3909553943508, 4.85309666406198],
    active: false
  },
  {
    location: [52.369553943508, 4.85309666406198],
    active: false
  },
  {
    location: [52.3909553943508, 4.929309666406198],
    active: false
  }
];

const currentCity = {name: `Amsterdam`, location: [52.37454, 4.897976]};

it(`Map should render correctly`, () => {
  const store = mockStore({currentCity});
  const tree = renderer.create(
      <Provider store={store} >
        <Map mapClass={MAP_CLASS_NAME} markers={markers} />
      </Provider>,
      {createNodeMock: () => document.createElement(`div`)}
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
