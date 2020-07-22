import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import placeOffers from "./mocks/offers";
import reviews from "./mocks/reviews";

ReactDOM.render(
    <App places={placeOffers} reviews={reviews} />,
    document.querySelector(`#root`)
);
