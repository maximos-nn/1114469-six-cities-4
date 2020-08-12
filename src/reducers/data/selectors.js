import {createSelector} from "reselect";
import NameSpace from "../name-space";
import {SortType} from "../../const";
import {getCurrentSortType} from "../ui/selectors";

const NAME_SPACE = NameSpace.DATA;
const DEFAULT_ZOOM = 12;
const MAX_REVIEW_COUNT = 10;
const MAX_NEARBY_PLACE_COUNT = 3;

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

const getCurrentPlaces = (state) => state[NAME_SPACE].cityOffers.get(
    state[NAME_SPACE].currentCity.name
) || [];

const getPlaceById = (state, id) => {
  for (const places of state[NAME_SPACE].cityOffers.values()) {
    const foundPlace = places.find((place) => place.id === id);
    if (foundPlace) {
      return foundPlace;
    }
  }
  return null;
};

const getCurrentCityName = (state) => state[NAME_SPACE].currentCity.name || ``;

const getCities = (state) => [...state[NAME_SPACE].cityOffers.keys()];

const getCurrentCityLocation = (state) => state[NAME_SPACE].currentCity.location;

const getCurrentCityZoom = (state) => state[NAME_SPACE].currentCity.zoom || DEFAULT_ZOOM;

const getSortedPlaces = createSelector(
    getCurrentPlaces,
    getCurrentSortType,
    (places, sortType) => sortPlaces(places, sortType)
);

const getReviews = (state) => state[NAME_SPACE].reviews || [];

const getSortedReviews = createSelector(
    getReviews,
    (reviews) => reviews.slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, MAX_REVIEW_COUNT)
);

const getNearbyPlaces = (state) => state[NAME_SPACE].nearbyOffers.slice(0, MAX_NEARBY_PLACE_COUNT) || [];

export {
  getCurrentPlaces,
  getPlaceById,
  getCurrentCityName,
  getCities,
  getCurrentCityLocation,
  getCurrentCityZoom,
  getSortedPlaces,
  getSortedReviews,
  getNearbyPlaces
};
