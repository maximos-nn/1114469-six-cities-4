import {parseUser} from "../../adapters/user";

const AuthenticationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authenticationStatus: AuthenticationStatus.NO_AUTH,
  user: {}
};

const ActionType = {
  CHANGE_AUTHENTICATION_STATUS: `CHANGE_AUTHENTICATION_STATUS`,
  CHANGE_USER: `CHANGE_USER`
};

const ActionCreator = {
  changeAuthenticationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHENTICATION_STATUS,
    payload: status
  }),
  changeUser: (userData) => ({
    type: ActionType.CHANGE_USER,
    payload: userData
  })
};

const onSuccess = (dispatch, userData) => {
  dispatch(ActionCreator.changeAuthenticationStatus(AuthenticationStatus.AUTH));
  dispatch(ActionCreator.changeUser(parseUser(userData)));
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        onSuccess(dispatch, response.data);
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        onSuccess(dispatch, response.data);
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHENTICATION_STATUS:
      return Object.assign({}, state, {authenticationStatus: action.payload});

    case ActionType.CHANGE_USER:
      return Object.assign({}, state, {user: action.payload});

    default:
      return state;
  }
};

export {AuthenticationStatus, ActionType, ActionCreator, Operation, reducer};
