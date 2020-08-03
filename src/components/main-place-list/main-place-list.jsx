import React from "react";
import {connect} from "react-redux";
import PlaceList from "../place-list/place-list.jsx";
import {getSortedPlaces} from "../../reducers/data/selectors";

const LIST_CLASS_NAME = `cities__places-list tabs__content`;
const CARD_CLASS_NAME = `cities__place-card`;
const IMAGE_WRAPPER_CLASS_NAME = `cities__image-wrapper`;

const MainPlaceList = (props) => {
  return (
    <PlaceList
      cardClass={CARD_CLASS_NAME}
      imageWrapperClass={IMAGE_WRAPPER_CLASS_NAME}
      listClass={LIST_CLASS_NAME}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  places: getSortedPlaces(state)
});

export {MainPlaceList};
export default connect(mapStateToProps)(MainPlaceList);
