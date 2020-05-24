import React from 'react';
import { ENTER_KEY_CODE } from 'utils/constants';

import { Styled } from 'sc/organisms/ChatForm';

interface KeyboardPressEvent extends React.KeyboardEvent {
  key: string;
}

const ChatForm: React.FC = () => {
  const textareaRef = React.createRef<HTMLTextAreaElement>();
  const [value, setValue] = React.useState('');

  const resizeTextArea = (reset?: boolean) => {
    const target = document.querySelector("textarea[name='chat']") as HTMLTextAreaElement;
    if (reset) {
      target.style.height = '20px';
    } else {
      target.style.height = value ? `${target.scrollHeight}px` : '20px';
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    resizeTextArea(e.target.value ? false : true);
  };

  const onKeyDown = (e: KeyboardPressEvent) => {
    if (((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) && e.keyCode === ENTER_KEY_CODE) {
      onSend(value);
    }
  };

  const onSend = (value: string) => {
    setValue('');
    resizeTextArea(true);
  };

  return (
    <Styled.Wrapper>
      <Styled.ChatFormField>
        <Styled.StyleTextarea
          ref={textareaRef}
          name="chat"
          minHeight={1 * 20 + 6}
          maxHeight={5 * 20 + 6}
          autoFocus={true}
          value={value}
          placeholder="#publicへのメッセージ"
          onKeyDown={onKeyDown}
          onChange={onChange}
        />
        <Styled.ChatFormIcons>
          <Styled.ChatFormIconBtn type="button" label={<Styled.StyleIconSend />} onClick={() => onSend(value)} />
        </Styled.ChatFormIcons>
      </Styled.ChatFormField>
    </Styled.Wrapper>
  );
};

export default ChatForm;
