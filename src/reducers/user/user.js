const AuthenticationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authenticationStatus: AuthenticationStatus.NO_AUTH
};

const ActionType = {
  CHANGE_AUTHENTICATION_STATUS: `CHANGE_AUTHENTICATION_STATUS`
};

const ActionCreator = {
  changeAuthenticationStatus: (status) => ({
    type: ActionType.CHANGE_AUTHENTICATION_STATUS,
    payload: status
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHENTICATION_STATUS:
      return Object.assign({}, state, {authenticationStatus: action.payload});

    default:
      return state;
  }
};

export {AuthenticationStatus, ActionType, ActionCreator, reducer};
