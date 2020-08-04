import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.UI;

const getCurrentPlace = (state) => state[NAME_SPACE].currentPlace;

const getSortTypes = (state) => state[NAME_SPACE].sortTypes;

const getCurrentSortType = (state) => state[NAME_SPACE].currentSortType;

export {getCurrentPlace, getSortTypes, getCurrentSortType};
