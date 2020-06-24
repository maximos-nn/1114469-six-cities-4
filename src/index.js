import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import placeOffers from "./mocks/offers";

ReactDOM.render(
    <App places={placeOffers} />,
    document.querySelector(`#root`)
);
