import React from 'react';
import firebase, { db } from 'firebaseConfig';
import { useSelector } from 'react-redux';
import { State } from 'store';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { Mode } from 'Theme';
import { useDispatch } from 'react-redux';
import { resetMe } from 'module/me/action';
import { showModal } from 'module/modal/action';
import { resetLogin } from 'module/login/action';
import { addAllChannel } from 'module/channels/action';
import { ChannelIF } from 'utils/interface';
import { Styled } from 'sc/organisms/Sidebar';

const Sidebar: React.FC = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { ...rest } = props;
  const [isVisible, setVisible] = React.useState(false);
  const [activeChannelId, setActiveChannelId] = React.useState<string>('');

  const currentUser = useSelector((state: State) => state.me.payload) as firebase.User;
  const channels = useSelector((state: State) => state.channels.payload);
  const modalNum = useSelector((state: State) => state.modal.modals.length);
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
              created_at: data.created_at,
              updated_at: data.updated_at,
            };
            channels = [...channels, channel];
          });
          if (channels.length > 0) {
            setActiveChannelId(channels[0].id);
          }
          dispatch(addAllChannel(channels));
          setVisible(true);
        })
        .catch((error) => console.log(error));
    }
  }, [isVisible, channelsRef, dispatch]);

  const onSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(resetMe());
        dispatch(resetLogin());
        history.push(ROUTES.signin.pathname);
      })
      .catch((error) => console.log(error));
  };

  const onShowModal = () => {
    dispatch(showModal(<Styled.StyleModalCreateChannel modalNum={modalNum} />, 'dark'));
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
        <Styled.StyleChannelPanel
          mode={Mode[0]}
          activeChannelId={activeChannelId}
          channels={channels}
          onShowModal={onShowModal}
          onChangeChannel={(channelId: string) => setActiveChannelId(channelId)}
        />
      </Styled.Nav>
    </Styled.Wrapper>
  );
};

export default Sidebar;
