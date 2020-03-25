import { SHOW_LOADER, HIDE_LOADER, LoaderAction } from './type';

export const showLoader = (): LoaderAction => ({
  type: SHOW_LOADER as typeof SHOW_LOADER,
});

export const hideLoader = (): LoaderAction => ({
  type: HIDE_LOADER as typeof HIDE_LOADER,
});
