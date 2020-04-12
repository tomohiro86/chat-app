import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebaseConfig';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from 'store';
import { setLogin } from 'module/login/action';
import { setMe } from 'module/me/action';
import { ROUTES } from 'routes';
import { Styled } from 'sc/templates/App';

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

  return (
    <Router>
      <Styled.Wrapper>
        {isLogin && currentUser && <Styled.StyleSidebar />}
        <Switch>
          {isVisible &&
            Object.keys(ROUTES).map((key) => {
              const route = ROUTES[key];
              return (
                <Route
                  key={key}
                  exact={route.exact}
                  path={route.pathname}
                  render={() => (
                    <Styled.StyleAuth isAuth={route.isAuth}>
                      <route.component />
                    </Styled.StyleAuth>
                  )}
                />
              );
            })}
        </Switch>
        <Styled.StyleModal />
      </Styled.Wrapper>
    </Router>
  );
};

export default App;
