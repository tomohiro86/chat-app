import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { State } from 'store';
import { ROUTES } from 'routes';

interface Props {
  isAuth: boolean;
  children: React.ReactNode;
}

const Auth: React.FC<Props> = (props) => {
  const { isAuth, children } = props;
  const isLogin = useSelector((state: State) => state.login.isLogin);

  const history = useHistory();
  const pathname = window.location.pathname;

  React.useEffect(() => {
    if (!isLogin) {
      history.push(ROUTES.signin.pathname);
    } else {
      if (pathname === ROUTES.signin.pathname || pathname === ROUTES.signup.pathname) {
        history.push(ROUTES.home.pathname);
      }
    }
  }, [history, isAuth, isLogin, pathname]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Auth;
