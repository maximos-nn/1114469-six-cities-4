import React from "react";
import PropTypes from "prop-types";
import PlaceList from "../place-list/place-list.jsx";
import {SortType} from "../../const.js";
import {placeListType} from "../prop-types.js";

const LIST_CLASS_NAME = `cities__places-list tabs__content`;
const CARD_CLASS_NAME = `cities__place-card`;
const IMAGE_WRAPPER_CLASS_NAME = `cities__image-wrapper`;

const sortPlaces = (places, sortType) => {
  switch (sortType) {
    case SortType.PRICE_TO_HIGH:
      return places.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_TO_LOW:
      return places.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return places.slice().sort((a, b) => b.rating - a.rating);
    default:
      return places;
  }
};

const MainPlaceList = (props) => {
  const {places, sortType} = props;
  const sortedPlaces = sortPlaces(places, sortType);
  const forwardedProps = Object.assign({}, props);
  delete forwardedProps.places;
  delete forwardedProps.sortType;
  return (
    <PlaceList
      cardClass={CARD_CLASS_NAME}
      imageWrapperClass={IMAGE_WRAPPER_CLASS_NAME}
      listClass={LIST_CLASS_NAME}
      places={sortedPlaces}
      {...forwardedProps}
    />
  );
};

MainPlaceList.propTypes = {
  places: placeListType,
  sortType: PropTypes.string.isRequired
};

export default MainPlaceList;
