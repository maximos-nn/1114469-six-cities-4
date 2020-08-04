import MockAdapter from "axios-mock-adapter";
import {reducer, ActionType, ActionCreator, Operation} from "./data";
import {createAPI} from "../../api";
import {parseOffers} from "../../adapters/offers";

const mockOffers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      [`avatar_url`]: `img/1.png`,
      id: 3,
      [`is_pro`]: true,
      name: `Angelina`
    },
    id: 1,
    images: [`img/1.png`, `img/2.png`],
    [`is_favorite`]: false,
    [`is_premium`]: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    [`max_adults`]: 4,
    [`preview_image`]: `img/1.png`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  }
];

const api = createAPI(() => {});

describe(`Reducer should work correctly`, () => {
  it(`Reducer without parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentCity: {},
      cityOffers: new Map()
    });
  });

  it(`Loading empty offer list with no state should return initial state`, () => {
    expect(reducer(void 0, {type: ActionType.LOAD_OFFERS, payload: []}))
    .toEqual({
      currentCity: {},
      cityOffers: new Map()
    });
  });

  it(`Reducer should return correct state after loading offers`, () => {
    expect(reducer(
        void 0,
        {
          type: ActionType.LOAD_OFFERS,
          payload: [
            {city: {name: `Amsterdam`}},
            {city: {name: `Paris`}},
            {city: {name: `Amsterdam`}}
          ]
        }
    ))
    .toEqual({
      currentCity: {name: `Amsterdam`},
      cityOffers: new Map()
        .set(`Amsterdam`, [{city: {name: `Amsterdam`}}, {city: {name: `Amsterdam`}}])
        .set(`Paris`, [{city: {name: `Paris`}}])
    });

    expect(reducer(
        {
          currentCity: {name: `Hamburg`},
          cityOffers: new Map()
            .set(`Hamburg`, [{city: {name: `Hamburg`}}])
            .set(`Brussels`, [{city: {name: `Brussels`}}])
        },
        {
          type: ActionType.LOAD_OFFERS,
          payload: [
            {city: {name: `Amsterdam`}},
            {city: {name: `Paris`}},
            {city: {name: `Amsterdam`}}
          ]
        }
    ))
    .toEqual({
      currentCity: {name: `Amsterdam`},
      cityOffers: new Map()
        .set(`Amsterdam`, [{city: {name: `Amsterdam`}}, {city: {name: `Amsterdam`}}])
        .set(`Paris`, [{city: {name: `Paris`}}])
    });
  });

  it(`Reducer should return correct state after city change`, () => {
    expect(reducer(
        {
          currentCity: {name: `Hamburg`},
          cityOffers: new Map()
            .set(`Hamburg`, [{city: {name: `Hamburg`}}])
            .set(`Brussels`, [{city: {name: `Brussels`}}])
        },
        {
          type: ActionType.CHANGE_CITY,
          payload: `Amsterdam`
        }
    ))
    .toEqual({
      currentCity: {name: `Hamburg`},
      cityOffers: new Map()
        .set(`Hamburg`, [{city: {name: `Hamburg`}}])
        .set(`Brussels`, [{city: {name: `Brussels`}}])
    });

    expect(reducer(
        {
          currentCity: {name: `Hamburg`},
          cityOffers: new Map()
            .set(`Hamburg`, [{city: {name: `Hamburg`}}])
            .set(`Brussels`, [{city: {name: `Brussels`}}])
        },
        {
          type: ActionType.CHANGE_CITY,
          payload: `Brussels`
        }
    ))
    .toEqual({
      currentCity: {name: `Brussels`},
      cityOffers: new Map()
        .set(`Hamburg`, [{city: {name: `Hamburg`}}])
        .set(`Brussels`, [{city: {name: `Brussels`}}])
    });
  });
});

describe(`Action creators should work correctly`, () => {
  it(`Load offers creator should return correct action`, () => {
    expect(ActionCreator.loadOffers([]))
    .toEqual({type: ActionType.LOAD_OFFERS, payload: []});

    expect(ActionCreator.loadOffers([{city: {name: `Hamburg`}}, {city: {name: `Brussels`}}]))
    .toEqual(
        {
          type: ActionType.LOAD_OFFERS,
          payload: [{city: {name: `Hamburg`}}, {city: {name: `Brussels`}}]
        }
    );
  });

  it(`Change city creator should return correct action`, () => {
    expect(ActionCreator.changeCity(``))
    .toEqual({type: ActionType.CHANGE_CITY, payload: ``});

    expect(ActionCreator.changeCity(`Hamburg`))
    .toEqual(
        {
          type: ActionType.CHANGE_CITY,
          payload: `Hamburg`
        }
    );
  });
});

describe(`Operation should work correctly`, () => {
  it(`Should make a correct API call to get data from /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = Operation.loadOffers();

    apiMock.onGet(`/hotels`).reply(200, mockOffers);

    return hotelsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
          {type: ActionType.LOAD_OFFERS, payload: parseOffers(mockOffers)}
      );
    });
  });
});
