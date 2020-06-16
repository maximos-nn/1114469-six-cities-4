import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const titleClickHandler = () => {};

const App = (props) => {
  const {placesCount, placesTitles} = props;

  return (
    <Main placesCount={placesCount} placesTitles={placesTitles} onPlaceTitleClick={titleClickHandler} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placesTitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
