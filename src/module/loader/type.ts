export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

interface ShowLoaderAction {
  type: typeof SHOW_LOADER;
}

interface HideLoaderAction {
  type: typeof HIDE_LOADER;
}

export type LoaderAction = ShowLoaderAction | HideLoaderAction;
