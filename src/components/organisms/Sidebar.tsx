import React from 'react';
import firebase, { db } from 'firebaseConfig';
import { useSelector } from 'react-redux';
import { State } from 'store';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { Mode } from 'Theme';
import { ChannelIF } from 'utils/interface';
import { Styled } from 'sc/organisms/Sidebar';

const Sidebar: React.FC = (props) => {
  const history = useHistory();

  const { ...rest } = props;
  const [isVisible, setVisible] = React.useState(false);
  const [channels, setChannels] = React.useState<ChannelIF[]>([]);

  const currentUser = useSelector((state: State) => state.me.payload) as firebase.User;
  const channelsRef = db.collection('channels');

  React.useEffect(() => {
    if (!isVisible) {
      let channels: ChannelIF[] = [];
      channelsRef
        .get()
        .then((querySnapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => {
          querySnapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) => {
            const data = doc.data();
            const channel = {
              id: doc.id,
              name: data.name,
              description: data.description,
              is_public: data.is_public,
            };
            channels = [...channels, channel];
          });
          setChannels(channels);
          setVisible(true);
        })
        .catch((error) => console.log(error));
    }
  }, [isVisible, channelsRef, channels]);

  const onSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => history.push(ROUTES.signin.pathname));
  };

  const onCreateChannel = () => {
    console.log('check');
  };

  if (!isVisible) return null;

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
        <Styled.StyleChannelPanel mode={Mode[0]} channels={channels} onCreateChannel={onCreateChannel} />
      </Styled.Nav>
    </Styled.Wrapper>
  );
};

export default Sidebar;
