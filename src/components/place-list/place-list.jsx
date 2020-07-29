import React from "react";
import PropTypes from "prop-types";
import {placeListType} from "../prop-types";
import PlaceCard from "../place-card/place-card.jsx";

const PlaceList = (props) => {
  const {places, listClass} = props;
  const forwardedProps = Object.assign({}, props);
  delete forwardedProps.places;
  delete forwardedProps.listClass;
  return (
    <div className={`${listClass} places__list`}>
      {places.map((card) => {
        return (
          <PlaceCard
            key={card.id}
            card={card}
            {...forwardedProps}
          />
        );
      })}
    </div>
  );
};

PlaceList.propTypes = {
  places: placeListType,
  listClass: PropTypes.string.isRequired,
};

export default PlaceList;
