const PERCENTS_PER_RATING_POINT = 20;

const PlaceType = {
  APARTMENT: `Apartment`,
  ROOM: `Private room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

const SortType = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

const AppRoute = {
  ROOT: `/`,
  SIGNIN: `/login`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`
};

const Error = {
  UNAUTHORIZED: 401
};

export {PERCENTS_PER_RATING_POINT, PlaceType, SortType, AppRoute, Error};
