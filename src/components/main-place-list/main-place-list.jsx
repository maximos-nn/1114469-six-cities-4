import React from "react";
import PlaceList from "../place-list/place-list.jsx";

const LIST_CLASS_NAME = `cities__places-list tabs__content`;
const CARD_CLASS_NAME = `cities__place-card`;
const IMAGE_WRAPPER_CLASS_NAME = `cities__image-wrapper`;

const MainPlaceList = (props) => {
  return (
    <PlaceList cardClass={CARD_CLASS_NAME} imageWrapperClass={IMAGE_WRAPPER_CLASS_NAME} listClass={LIST_CLASS_NAME} {...props} />
  );
};

export default MainPlaceList;
