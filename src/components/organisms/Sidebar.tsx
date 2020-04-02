import React from 'react';
import firebase from 'firebaseConfig';
import { useSelector } from 'react-redux';
import { State } from 'store';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { Styled } from 'sc/organisms/Sidebar';

const Sidebar: React.FC = (props) => {
  const history = useHistory();

  const { ...rest } = props;
  const currentUser = useSelector((state: State) => state.me.payload) as firebase.User;

  const onSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => history.push(ROUTES.signin.pathname));
  };

  return (
    <Styled.Wrapper {...rest}>
      <Styled.Header>
        <Styled.StyleUserInfo currentUser={currentUser} onSignout={onSignout} />
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Sidebar;
