import React from 'react';
import { BrowserRouter as Router, Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import firebase from 'firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'store';
import { setLogin } from 'module/login/action';
import { setMe } from 'module/me/action';
import { ROUTES } from 'routes';
import { Styled } from 'sc/templates/App';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isLogin = useSelector((state: State) => state.login.isLogin);
  return isLogin ? <Route {...props} /> : <Redirect to={ROUTES.signin.pathname} />;
};

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [isVisible, setVisible] = React.useState(false);
  const isLogin = useSelector((state: State) => state.login.isLogin);
  const currentUser = useSelector((state: State) => state.me.payload) as firebase.User;

  React.useEffect(() => {
    if (!isVisible) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(setMe(user));
          dispatch(setLogin());
          setVisible(true);
        } else {
          setVisible(true);
        }
      });
    }
  }, [dispatch, isVisible]);

  if (!isVisible) return null;

  return (
    <Router>
      <Styled.Wrapper>
        {isLogin && currentUser && <Styled.StyleSidebar />}
        <Switch>
          {Object.keys(ROUTES).map((key) => {
            const route = ROUTES[key];
            if (route.isAuth) {
              return <PrivateRoute key={key} exact={route.exact} path={route.pathname} component={route.component} />;
            } else {
              return <Route key={key} exact={route.exact} path={route.pathname} render={() => <route.component />} />;
            }
          })}
        </Switch>
      </Styled.Wrapper>
      {isLogin && currentUser && <Styled.StyleModal />}
    </Router>
  );
};

export default App;
