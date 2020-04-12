import Home from 'components/pages/Home';
import Chat from 'components/pages/Chat';
import Signin from 'components/pages/Signin';
import Signup from 'components/pages/Signup';

export interface RouteIF {
  pathname: string;
  exact: boolean;
  isAuth: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

export interface RoutesIF {
  home: RouteIF;
  chat: RouteIF;
  signin: RouteIF;
  signup: RouteIF;
  [key: string]: RouteIF;
}

export const ROUTES: RoutesIF = {
  home: {
    pathname: '/',
    exact: true,
    isAuth: true,
    component: Home,
  },
  chat: {
    pathname: '/room/:id',
    exact: true,
    isAuth: true,
    component: Chat,
  },
  signin: {
    pathname: '/signin',
    exact: true,
    isAuth: false,
    component: Signin,
  },
  signup: {
    pathname: '/signup',
    exact: true,
    isAuth: false,
    component: Signup,
  },
};
