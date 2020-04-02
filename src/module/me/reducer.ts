import { SET_ME, RESET_ME, MeAction } from './type';

interface State {
  payload: firebase.User | null;
}

const initialState = {
  payload: null,
};

export const meReducer = (state: State = initialState, action: MeAction) => {
  switch (action.type) {
    case SET_ME:
      return {
        ...state,
        payload: action.payload,
      };
    case RESET_ME:
      return {
        ...state,
        payload: null,
      };
    default:
      return state;
  }
};
