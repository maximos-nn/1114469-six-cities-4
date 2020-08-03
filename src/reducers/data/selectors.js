import NameSpace from "../name-space";
import {SortType} from "../../const";
import {getCurrentSortType} from "../ui/selectors";

const NAME_SPACE = NameSpace.DATA;
const DEFAULT_ZOOM = 12;

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
);

const getCurrentCityName = (state) => state[NAME_SPACE].currentCity.name;

const getCities = (state) => [...state[NAME_SPACE].cityOffers.keys()];

const getCurrentCityLocation = (state) => state[NAME_SPACE].currentCity.location;

const getCurrentCityZoom = (state) => state[NAME_SPACE].currentCity.zoom || DEFAULT_ZOOM;

const getSortedPlaces = (state) => sortPlaces(getCurrentPlaces(state), getCurrentSortType(state));

export {
  getCurrentPlaces,
  getCurrentCityName,
  getCities,
  getCurrentCityLocation,
  getCurrentCityZoom,
  getSortedPlaces
};
