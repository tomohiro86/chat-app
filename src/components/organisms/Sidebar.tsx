import React from 'react';
import firebase from 'firebaseConfig';
import { useSelector } from 'react-redux';
import { State } from 'store';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { Mode } from 'Theme';
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

  const onCreateChannel = () => {
    console.log('check');
  };

  return (
    <Styled.Wrapper mode={Mode[0]} {...rest}>
      <Styled.Header>
        <Styled.StyleUserInfo
          name={currentUser.displayName ? currentUser.displayName : ''}
          mode={Mode[0]}
          onSignout={onSignout}
        />
      </Styled.Header>
      <Styled.Nav>
        <Styled.StyleChannelPanel mode={Mode[0]} onCreateChannel={onCreateChannel} />
      </Styled.Nav>
    </Styled.Wrapper>
  );
};

export default Sidebar;
