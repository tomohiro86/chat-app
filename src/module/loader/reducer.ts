import { SHOW_LOADER, HIDE_LOADER, LoaderAction } from './type';

interface State {
  visible: boolean;
}

const initialState = {
  visible: false,
};

export const loaderReducer = (state: State = initialState, action: LoaderAction) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        visible: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
