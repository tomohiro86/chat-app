import React from 'react';
import { Styled } from 'sc/organisms/ChatForm';

const ChatForm: React.FC = () => {
  const [value, setValue] = React.useState('');

  const resizeTextArea = (target: EventTarget & HTMLTextAreaElement) => {
    target.style.height = '20px';
    target.style.height = target.scrollHeight + 'px';
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    resizeTextArea(e.target);
  };

  const onSend = () => {
    console.log(value);
    setValue('');
  };

  return (
    <Styled.Wrapper>
      <Styled.ChatFormField>
        <Styled.StyleTextarea
          name="chat"
          minHeight={1 * 20 + 6}
          maxHeight={5 * 20 + 6}
          autoFocus={true}
          value={value}
          placeholder="#publicへのメッセージ"
          onChange={onChange}
        />
        <Styled.ChatFormIcons>
          <Styled.ChatFormIconBtn type="button" label={<Styled.StyleIconSend />} onClick={onSend} />
        </Styled.ChatFormIcons>
      </Styled.ChatFormField>
    </Styled.Wrapper>
  );
};

export default ChatForm;
