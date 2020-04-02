import { SET_ME, RESET_ME, MeAction } from './type';

export const setMe = (payload: firebase.User): MeAction => ({
  type: SET_ME as typeof SET_ME,
  payload,
});

export const resetMe = (): MeAction => ({
  type: RESET_ME as typeof RESET_ME,
});
