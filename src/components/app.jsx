import React from "react";
import PropTypes from "prop-types";
import Main from "./main.jsx";

const App = (props) => {
  const {placesCount, placesTitles} = props;

  return (
    <Main placesCount={placesCount} placesTitles={placesTitles} />
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  placesTitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
