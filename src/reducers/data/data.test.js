import MockAdapter from "axios-mock-adapter";
import {reducer, ActionType, ActionCreator, Operation} from "./data";
import {createAPI} from "../../api";
import {parseOffers} from "../../adapters/offers";
import {parseComments} from "../../adapters/comments";

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

const mockReviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      [`avatar_url`]: `img/1.png`,
      id: 4,
      [`is_pro`]: false,
      name: `Max`
    }
  }
];

const api = createAPI(() => {});

describe(`Reducer should work correctly`, () => {
  it(`Reducer without parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentCity: {},
      cityOffers: new Map(),
      reviews: [],
      nearbyOffers: []
    });
  });

  it(`Loading empty offer list with no state should return initial state`, () => {
    expect(reducer(void 0, {type: ActionType.LOAD_OFFERS, payload: []}))
    .toEqual({
      currentCity: {},
      cityOffers: new Map(),
      reviews: [],
      nearbyOffers: []
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
        .set(`Paris`, [{city: {name: `Paris`}}]),
      reviews: [],
      nearbyOffers: []
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

  it(`Reducer should return correct state after loading reviews`, () => {
    expect(reducer(
        void 0,
        {
          type: ActionType.LOAD_REVIEWS,
          payload: [
            {rating: 1, comment: `comment1`},
            {rating: 2, comment: `comment2`},
            {rating: 3, comment: `comment3`}
          ]
        }
    ))
    .toEqual({
      currentCity: {},
      cityOffers: new Map(),
      reviews: [
        {rating: 1, comment: `comment1`},
        {rating: 2, comment: `comment2`},
        {rating: 3, comment: `comment3`}
      ],
      nearbyOffers: []
    });
  });

  it(`Reducer should return correct state after loading nearby offers`, () => {
    expect(reducer(
        void 0,
        {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [
            {city: {name: `Amsterdam`}},
            {city: {name: `Paris`}},
            {city: {name: `Amsterdam`}}
          ]
        }
    ))
    .toEqual({
      currentCity: {},
      cityOffers: new Map(),
      reviews: [],
      nearbyOffers: [
        {city: {name: `Amsterdam`}},
        {city: {name: `Paris`}},
        {city: {name: `Amsterdam`}}
      ]
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

  it(`Load reviews creator should return correct action`, () => {
    expect(ActionCreator.loadReviews([]))
    .toEqual({type: ActionType.LOAD_REVIEWS, payload: []});

    expect(ActionCreator.loadReviews([
      {rating: 2, comment: `comment1`},
      {rating: 4, comment: `comment2`}
    ]))
    .toEqual(
        {
          type: ActionType.LOAD_REVIEWS,
          payload: [
            {rating: 2, comment: `comment1`},
            {rating: 4, comment: `comment2`}
          ]
        }
    );
  });

  it(`Load nearby offers creator should return correct action`, () => {
    expect(ActionCreator.loadNearbyOffers([]))
    .toEqual({type: ActionType.LOAD_NEARBY_OFFERS, payload: []});

    expect(ActionCreator.loadNearbyOffers([{city: {name: `Hamburg`}}, {city: {name: `Brussels`}}]))
    .toEqual(
        {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [{city: {name: `Hamburg`}}, {city: {name: `Brussels`}}]
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

  it(`Should make a correct API call to get nearby offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const hotelsLoader = Operation.loadNearbyOffers(123);

    apiMock.onGet(`/hotels/123/nearby`).reply(200, mockOffers);

    return hotelsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
          {type: ActionType.LOAD_NEARBY_OFFERS, payload: parseOffers(mockOffers)}
      );
    });
  });

  it(`Should make a correct API call to get reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = Operation.loadReviews(321);

    apiMock.onGet(`/comments/321`).reply(200, mockReviews);

    return reviewsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
          {type: ActionType.LOAD_REVIEWS, payload: parseComments(mockReviews)}
      );
    });
  });

  it(`Should make a correct API call to post review`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewLoader = Operation.postReview(
        1,
        {
          comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
          rating: 4
        }
    );

    apiMock.onPost(`/comments/1`).reply(200, mockReviews);

    return reviewLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
          {type: ActionType.LOAD_REVIEWS, payload: parseComments(mockReviews)}
      );
    });
  });
});
