import React from "react";
import Map from "../map/map.jsx";

const MAP_CLASS_NAME = `cities__map`;

const MainMap = (props) => {
  return (
    <Map mapClass={MAP_CLASS_NAME} {...props} />
  );
};

export default MainMap;
