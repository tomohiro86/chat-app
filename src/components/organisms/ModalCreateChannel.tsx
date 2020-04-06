import * as React from 'react';
import { Styled } from 'sc/organisms/ModalCreateChannel';

interface Prps {
  onCreateChannel: () => void;
}

const ModalCreateChannel: React.FC<Prps> = (props) => {
  const { onCreateChannel, ...rest } = props;
  return (
    <Styled.Wrapper {...rest}>
      <Styled.StyleModalHeader title="チャネルを作成する" onClick={onCreateChannel} />
    </Styled.Wrapper>
  );
};

export default ModalCreateChannel;
