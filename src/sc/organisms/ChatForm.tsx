import styled from 'styled-components';
import IconSend from 'components/svg/IconSend';
import Button from 'components/atoms/Button';
import Textarea from 'components/atoms/Textarea';

interface TextAreaIF {
  minHeight: number;
  maxHeight: number;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 7px 20px;
`;

const ChatFormField = styled.div`
  display: flex;
  align-items: baseline;
  height: 100%;
  padding: 6px 6px 7px;
  border: 1px solid #5f5f5f;
  border-radius: 4px;
`;

const StyleTextarea = styled(Textarea)`
  min-height: ${(props: TextAreaIF) => `${props.minHeight}px`};
  height: ${(props: TextAreaIF) => `${props.minHeight}px`};
  max-height: ${(props: TextAreaIF) => (props.maxHeight ? `${props.maxHeight}px` : `${props.minHeight}px`)};
  background-color: inherit;
  line-height: 1.6;
`;

const ChatFormIcons = styled.div`
  margin-left: 16px;
`;

const ChatFormIconBtn = styled(Button)`
  margin: 0;
  padding: 0;
  background-color: inherit;
  border: none;
`;

const StyleIconSend = styled(IconSend)`
  width: 20px;
`;

export const Styled = {
  Wrapper,
  ChatFormField,
  StyleTextarea,
  ChatFormIcons,
  ChatFormIconBtn,
  StyleIconSend,
};
