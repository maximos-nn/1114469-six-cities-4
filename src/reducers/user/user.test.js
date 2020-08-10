import {reducer, ActionCreator, ActionType, AuthenticationStatus} from "./user";

it(`Reducer without parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authenticationStatus: AuthenticationStatus.NO_AUTH,
    user: {}
  });
});

it(`Reducer should return correct state after changing authentication status`, () => {
  expect(reducer(
      {authenticationStatus: AuthenticationStatus.NO_AUTH, user: {}},
      {
        type: ActionType.CHANGE_AUTHENTICATION_STATUS,
        payload: AuthenticationStatus.AUTH
      }
  ))
  .toEqual({
    authenticationStatus: AuthenticationStatus.AUTH,
    user: {}
  });

  expect(reducer(
      {authenticationStatus: AuthenticationStatus.AUTH, user: {}},
      {
        type: ActionType.CHANGE_AUTHENTICATION_STATUS,
        payload: AuthenticationStatus.NO_AUTH
      }
  ))
  .toEqual({
    authenticationStatus: AuthenticationStatus.NO_AUTH,
    user: {}
  });
});

it(`Reducer Should return correct state after changing user`, () => {
  expect(reducer(
      {authenticationStatus: AuthenticationStatus.NO_AUTH, user: {}},
      {
        type: ActionType.CHANGE_USER,
        payload: {id: 1}
      }
  ))
  .toEqual({
    authenticationStatus: AuthenticationStatus.NO_AUTH,
    user: {id: 1}
  });
});

it(`Action creators shoul work correctly`, () => {
  expect(ActionCreator.changeAuthenticationStatus(AuthenticationStatus.NO_AUTH))
  .toEqual({
    type: ActionType.CHANGE_AUTHENTICATION_STATUS,
    payload: AuthenticationStatus.NO_AUTH
  });

  expect(ActionCreator.changeAuthenticationStatus(AuthenticationStatus.AUTH))
  .toEqual({
    type: ActionType.CHANGE_AUTHENTICATION_STATUS,
    payload: AuthenticationStatus.AUTH
  });

  expect(ActionCreator.changeUser({id: 1}))
  .toEqual({
    type: ActionType.CHANGE_USER,
    payload: {id: 1}
  });
});
