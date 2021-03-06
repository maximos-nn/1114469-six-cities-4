import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.USER;

const getAuthenticationStatus = (state) => state[NAME_SPACE].authenticationStatus;

const getEmail = (state) => state[NAME_SPACE].user.email || ``;

export {getAuthenticationStatus, getEmail};
