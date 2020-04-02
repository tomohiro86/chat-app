export const SET_ME = 'SET_ME';
export const RESET_ME = 'RESET_ME';

interface SetMeAction {
  type: typeof SET_ME;
  payload: firebase.User;
}

interface ResetMeAction {
  type: typeof RESET_ME;
}

export type MeAction = SetMeAction | ResetMeAction;
