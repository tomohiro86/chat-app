import Home from 'components/pages/Home';
import Signin from 'components/pages/Signin';

export interface RouteIF {
  pathname: string;
  exact: boolean;
  isAuth: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

export interface RoutesIF {
  home: RouteIF;
  signin: RouteIF;
  [key: string]: RouteIF;
}

export const ROUTES: RoutesIF = {
  home: {
    pathname: '/',
    exact: true,
    isAuth: true,
    component: Home,
  },
  signin: {
    pathname: '/signin',
    exact: true,
    isAuth: false,
    component: Signin,
  },
};
