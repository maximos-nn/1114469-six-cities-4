import React from "react";
import PlaceList from "../place-list/place-list.jsx";

const LIST_CLASS_NAME = `near-places__list`;
const CARD_CLASS_NAME = `near-places__card`;
const IMAGE_WRAPPER_CLASS_NAME = `near-places__image-wrapper`;

const NearbyPlaceList = (props) => {
  return (
    <PlaceList
      cardClass={CARD_CLASS_NAME}
      imageWrapperClass={IMAGE_WRAPPER_CLASS_NAME}
      listClass={LIST_CLASS_NAME}
      events={{
        onBookmarkButtonClick: () => {},
        onCardMouseEnter: () => {},
        onCardMouseLeave: () => {}
      }}
      {...props} />
  );
};

export default NearbyPlaceList;
