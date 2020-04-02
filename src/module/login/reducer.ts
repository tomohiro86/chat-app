import { SET_LOGIN, RESET_LOGIN, LoginAction } from './type';

interface State {
  isLogin: boolean;
}

const initialState = {
  isLogin: false,
};

export const loginReducer = (state: State = initialState, action: LoginAction) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case RESET_LOGIN:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
