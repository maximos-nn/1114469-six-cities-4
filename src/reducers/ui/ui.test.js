import {reducer, ActionType, ActionCreator} from "./ui";

describe(`Reducer should work correctly`, () => {
  it(`Reducer without parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      sortTypes: [
        `Popular`,
        `Price: low to high`,
        `Price: high to low`,
        `Top rated first`
      ],
      currentSortType: `Popular`,
      currentPlace: null
    });
  });

  it(`Reducer should return correct state after changing sort type`, () => {
    expect(reducer(
        void 0,
        {
          type: ActionType.CHANGE_SORT_TYPE,
          payload: `Price: high to low`
        }
    ))
    .toEqual({
      sortTypes: [
        `Popular`,
        `Price: low to high`,
        `Price: high to low`,
        `Top rated first`
      ],
      currentSortType: `Price: high to low`,
      currentPlace: null
    });

    expect(reducer(
        {
          sortTypes: [
            `Popular`,
            `Price: low to high`,
            `Price: high to low`,
            `Top rated first`
          ],
          currentSortType: `Price: low to high`,
          currentPlace: null
        },
        {
          type: ActionType.CHANGE_SORT_TYPE,
          payload: `Top rated first`
        }
    ))
    .toEqual({
      sortTypes: [
        `Popular`,
        `Price: low to high`,
        `Price: high to low`,
        `Top rated first`
      ],
      currentSortType: `Top rated first`,
      currentPlace: null
    });
  });

  it(`Reducer should return correct state after place change`, () => {
    expect(reducer(
        {
          sortTypes: [
            `Popular`,
            `Price: low to high`,
            `Price: high to low`,
            `Top rated first`
          ],
          currentSortType: `Popular`,
          currentPlace: null
        },
        {
          type: ActionType.CHANGE_PLACE,
          payload: {id: 1}
        }
    ))
    .toEqual({
      sortTypes: [
        `Popular`,
        `Price: low to high`,
        `Price: high to low`,
        `Top rated first`
      ],
      currentSortType: `Popular`,
      currentPlace: {id: 1}
    });

    expect(reducer(
        {
          sortTypes: [
            `Popular`,
            `Price: low to high`,
            `Price: high to low`,
            `Top rated first`
          ],
          currentSortType: `Popular`,
          currentPlace: {id: 1}
        },
        {
          type: ActionType.CHANGE_PLACE,
          payload: null
        }
    ))
    .toEqual({
      sortTypes: [
        `Popular`,
        `Price: low to high`,
        `Price: high to low`,
        `Top rated first`
      ],
      currentSortType: `Popular`,
      currentPlace: null
    });
  });
});

describe(`Action creators should work correctly`, () => {
  it(`Load offers creator should return correct action`, () => {
    expect(ActionCreator.changeSortType(`Top rated first`))
    .toEqual(
        {
          type: ActionType.CHANGE_SORT_TYPE,
          payload: `Top rated first`
        }
    );
  });

  it(`Change city creator should return correct action`, () => {
    expect(ActionCreator.changePlace({id: 1}))
    .toEqual(
        {
          type: ActionType.CHANGE_PLACE,
          payload: {id: 1}
        }
    );
  });
});
