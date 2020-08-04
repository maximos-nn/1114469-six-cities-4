import {reducer, ActionType, ActionCreator} from "./data";

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
