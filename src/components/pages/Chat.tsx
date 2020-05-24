import React from 'react';
import { Styled } from 'sc/pages/Chat';

const Chat: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.ChatFrame>
        <Styled.MessageArea></Styled.MessageArea>
      </Styled.ChatFrame>
      <Styled.Footer>
        <Styled.StyleChatForm />
      </Styled.Footer>
    </Styled.Wrapper>
  );
};

export default Chat;
