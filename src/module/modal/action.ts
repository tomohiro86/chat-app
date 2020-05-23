import { SHOW_MODAL, HIDE_MODAL, ModalAction } from './type';

export const showModal = (element: React.ReactNode, theme?: string): ModalAction => ({
  type: SHOW_MODAL as typeof SHOW_MODAL,
  element,
  theme,
});

export const hideModal = (): ModalAction => ({
  type: HIDE_MODAL as typeof HIDE_MODAL,
  element: null,
});
