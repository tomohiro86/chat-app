import styled from 'styled-components';
import ChatForm from 'components/organisms/ChatForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const ChatFrame = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const MessageArea = styled.div``;

const Footer = styled.footer`
  /* min-height: 50px; */
`;

const StyleChatForm = styled(ChatForm)`
  width: 100%;
`;

export const Styled = {
  Wrapper,
  ChatFrame,
  MessageArea,
  Footer,
  StyleChatForm,
};
