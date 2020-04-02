export const SET_LOGIN = 'SET_LOGIN';
export const RESET_LOGIN = 'RESET_LOGIN';

interface SetLoginAction {
  type: typeof SET_LOGIN;
}

interface ResetLoginAction {
  type: typeof RESET_LOGIN;
}

export type LoginAction = SetLoginAction | ResetLoginAction;
