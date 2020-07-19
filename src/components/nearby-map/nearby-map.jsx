import React from "react";
import Map from "../map/map.jsx";

const MAP_CLASS_NAME = `property__map`;

const NearbyMap = (props) => {
  return (
    <Map mapClass={MAP_CLASS_NAME} {...props} />
  );
};

export default NearbyMap;
