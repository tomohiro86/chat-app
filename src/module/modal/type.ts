export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

interface ShowModalAction {
  type: typeof SHOW_MODAL;
  element: React.ReactNode;
  theme?: string;
}

interface HideModalAction {
  type: typeof HIDE_MODAL;
  element: null;
}

export type ModalAction = ShowModalAction | HideModalAction;
