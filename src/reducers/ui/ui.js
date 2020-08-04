import {SortType} from "../../const.js";

const initialState = {
  sortTypes: Object.values(SortType),
  currentSortType: SortType.POPULAR,
  currentPlace: null
};

const ActionType = {
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_PLACE: `CHANGE_PLACE`
};

const ActionCreator = {
  changeSortType: (sortType) => ({type: ActionType.CHANGE_SORT_TYPE, payload: sortType}),
  changePlace: (place) => ({type: ActionType.CHANGE_PLACE, payload: place})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state, {currentSortType: action.payload});

    case ActionType.CHANGE_PLACE:
      return Object.assign({}, state, {currentPlace: action.payload});

    default:
      return state;
  }
};

export {ActionType, ActionCreator, reducer};
