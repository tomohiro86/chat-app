import * as React from 'react';
import { Styled } from 'sc/molecules/ModalHeader';

interface Props {
  title: string | React.ReactNode;
  onClick: () => void;
}

const ModalHeader: React.FC<Props> = (props) => {
  const { title, onClick, ...rest } = props;
  return (
    <Styled.Header {...rest}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.CloseButton type="button" label={<Styled.StyleIconClose />} onClick={onClick} />
    </Styled.Header>
  );
};

export default ModalHeader;
