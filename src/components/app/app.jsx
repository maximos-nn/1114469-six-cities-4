import React from "react";
import {placesListType} from "../prop-types.js";
import Main from "../main/main.jsx";

const App = (props) => {
  const {places} = props;

  return (
    <Main places={places} onPlaceTitleClick={() => {}} onBookmarkButtonClick={() => {}} />
  );
};

App.propTypes = {
  places: placesListType
};

export default App;
