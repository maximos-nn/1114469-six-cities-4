import {SortType} from "./const.js";

const initialState = {
  currentCity: {},
  cityOffers: new Map(),
  sortTypes: Object.values(SortType),
  currentSortType: SortType.POPULAR,
  currentPlace: null
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_PLACE: `CHANGE_PLACE`
};

const ActionCreator = {
  loadOffers: (offers) => ({type: ActionType.LOAD_OFFERS, payload: offers}),
  changeCity: (city) => ({type: ActionType.CHANGE_CITY, payload: city}),
  changeSortType: (sortType) => ({type: ActionType.CHANGE_SORT_TYPE, payload: sortType}),
  changePlace: (place) => ({type: ActionType.CHANGE_PLACE, payload: place})
};

const mapOfferToCity = (result, offer) => {
  const key = offer.city.name;

  if (!result.has(key)) {
    result.set(key, []);
  }

  result.get(key).push(offer);
  return result;
};

const loadOffers = (offers) => {
  const cityOffers = offers.reduce(mapOfferToCity, new Map());
  const currentCity = offers[0] && offers[0].city || {};
  return {currentCity, cityOffers};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, loadOffers(action.payload));

    case ActionType.CHANGE_CITY:
      const cityName = action.payload;
      if (!state.cityOffers.has(cityName)) {
        return state;
      }
      const currentCity = state.cityOffers.get(cityName)[0].city;
      return Object.assign({}, state, {currentCity});

    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state, {currentSortType: action.payload});

    case ActionType.CHANGE_PLACE:
      return Object.assign({}, state, {currentPlace: action.payload});

    default:
      return state;
  }
};

export {ActionType, ActionCreator, reducer};
