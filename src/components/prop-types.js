import PropTypes from "prop-types";
import {PlaceType} from "../const";

const placeCardType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(PlaceType)),
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired
}).isRequired;

const placesListType = PropTypes.arrayOf(placeCardType).isRequired;

export {placeCardType, placesListType};
