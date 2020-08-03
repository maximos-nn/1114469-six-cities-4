import {reducer, ActionCreator, ActionType, AuthenticationStatus} from "./user";

it(`Reducer without parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({authenticationStatus: AuthenticationStatus.NO_AUTH});
});

it(`Reducer should return correct state after changing authentication status`, () => {
  expect(reducer(
      {authenticationStatus: AuthenticationStatus.NO_AUTH},
      {
        type: ActionType.CHANGE_AUTHENTICATION_STATUS,
        payload: AuthenticationStatus.AUTH
      }
  ))
  .toEqual({
    authenticationStatus: AuthenticationStatus.AUTH
  });

  expect(reducer(
      {authenticationStatus: AuthenticationStatus.AUTH},
      {
        type: ActionType.CHANGE_AUTHENTICATION_STATUS,
        payload: AuthenticationStatus.NO_AUTH
      }
  ))
  .toEqual({
    authenticationStatus: AuthenticationStatus.NO_AUTH
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
});
