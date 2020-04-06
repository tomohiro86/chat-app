import { SHOW_MODAL, HIDE_MODAL, ModalAction } from './type';

interface ModalIF {
  id: number;
  element: null | React.ReactNode;
  theme: string;
}

interface State {
  modals: ModalIF[];
  isModal: boolean;
}

const initialState = {
  modals: [],
  isModal: false,
};

export const modalReducer = (state: State = initialState, action: ModalAction) => {
  switch (action.type) {
    case SHOW_MODAL: {
      const modal = {
        id: state.modals.length + 1,
        element: action.element,
        theme: action.theme ? action.theme : '',
      };
      const modals = [...state.modals, modal];
      return {
        ...state,
        modals,
        isModal: modals.length > 0 ? true : false,
      };
    }
    case HIDE_MODAL: {
      const modals = state.modals.filter((_, i: number) => i !== state.modals.length - 1);
      return {
        ...state,
        modals,
        isModal: modals.length > 0 ? true : false,
      };
    }
    default:
      return state;
  }
};
