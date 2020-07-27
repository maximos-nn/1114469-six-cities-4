const initialState = {
  currentCity: ``,
  cityOffers: new Map()
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`
};

const ActionCreator = {
  loadOffers: (offers) => ({type: ActionType.LOAD_OFFERS, payload: offers}),
  changeCity: (city) => ({type: ActionType.CHANGE_CITY, payload: city})
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
  const currentCity = offers[0] && offers[0].city.name || ``;
  return {currentCity, cityOffers};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, loadOffers(action.payload));

    case ActionType.CHANGE_CITY:
      const currentCity = action.payload;
      if (!state.cityOffers.has(currentCity)) {
        return state;
      }
      return Object.assign({}, state, {currentCity});

    default:
      return state;
  }
};

export {ActionType, ActionCreator, reducer};
