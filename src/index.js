import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Place = {
  COUNT: 312,
  TITLES: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ]
};

ReactDOM.render(
    <App placesCount={Place.COUNT} placesTitles={Place.TITLES} />,
    document.querySelector(`#root`)
);
