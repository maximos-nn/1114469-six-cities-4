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
  isPremium: PropTypes.bool.isRequired,
  guests: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired
  }).isRequired,
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  location: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
}).isRequired;

const placesListType = PropTypes.arrayOf(placeCardType).isRequired;

export {placeCardType, placesListType};
