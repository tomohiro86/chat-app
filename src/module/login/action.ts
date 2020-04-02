import { SET_LOGIN, RESET_LOGIN, LoginAction } from './type';

export const setLogin = (): LoginAction => ({
  type: SET_LOGIN as typeof SET_LOGIN,
});

export const resetLogin = (): LoginAction => ({
  type: RESET_LOGIN as typeof RESET_LOGIN,
});
