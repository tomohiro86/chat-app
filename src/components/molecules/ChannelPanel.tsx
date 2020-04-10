import React from 'react';
import { Styled } from 'sc/molecules/ChannelPanel';

interface Props {
  mode: string;
  onCreateChannel: () => void;
}

const ChannelPanel: React.FC<Props> = (props) => {
  const { mode, onCreateChannel, ...rest } = props;

  return (
    <Styled.Wrapper {...rest}>
      <Styled.Header>
        <Styled.Title mode={mode}>チャンネル</Styled.Title>
        <Styled.PlusBtn type="button" label={''} onClick={onCreateChannel} />
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default ChannelPanel;
