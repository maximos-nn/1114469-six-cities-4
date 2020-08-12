import {parseOffers, parseOffer} from "../../adapters/offers";
import {parseComments} from "../../adapters/comments";

const initialState = {
  currentCity: {},
  cityOffers: new Map(),
  reviews: [],
  nearbyOffers: []
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  UPDATE_OFFER: `UPDATE_OFFER`
};

const ActionCreator = {
  loadOffers: (offers) => ({type: ActionType.LOAD_OFFERS, payload: offers}),
  changeCity: (city) => ({type: ActionType.CHANGE_CITY, payload: city}),
  loadReviews: (reviews) => ({type: ActionType.LOAD_REVIEWS, payload: reviews}),
  loadNearbyOffers: (offers) => ({type: ActionType.LOAD_NEARBY_OFFERS, payload: offers}),
  updateOffer: (offer) => ({type: ActionType.UPDATE_OFFER, payload: offer})
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(parseOffers(response.data)));
      });
  },
  loadReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(parseComments(response.data)));
      });
  },
  postReview: (offerId, review) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, review)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(parseComments(response.data)));
      });
  },
  loadNearbyOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearbyOffers(parseOffers(response.data)));
      });
  },
  updateFavorite: (offerId, isFavorite) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/${Number(isFavorite)}`)
      .then((response) => {
        dispatch(ActionCreator.updateOffer(parseOffer(response.data)));
      });
  }
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

const updateOfferArray = (offers, newOffer) => {
  const index = offers.findIndex((offer) => offer.id === newOffer.id);
  if (index === -1) {
    return offers;
  }
  return [].concat(...offers.slice(0, index), newOffer, ...offers.slice(index + 1));
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

    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {reviews: action.payload});

    case ActionType.LOAD_NEARBY_OFFERS:
      return Object.assign({}, state, {nearbyOffers: action.payload});

    case ActionType.UPDATE_OFFER:
      const key = state.currentCity.name;
      const currentOffers = state.cityOffers.get(key) || [];
      const newOffers = updateOfferArray(currentOffers, action.payload);
      const newNearbyOffers = updateOfferArray(state.nearbyOffers, action.payload);
      return Object.assign(
          {},
          state,
          {
            cityOffers: new Map(state.cityOffers).set(key, newOffers),
            nearbyOffers: newNearbyOffers
          }
      );

    default:
      return state;
  }
};

export {ActionType, ActionCreator, Operation, reducer};
