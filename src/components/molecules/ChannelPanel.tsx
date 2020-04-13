import React from 'react';
import { ChannelIF } from 'utils/interface';
import { Styled } from 'sc/molecules/ChannelPanel';

interface Props {
  mode: string;
  channels: ChannelIF[];
  onShowModal: () => void;
}

const ChannelPanel: React.FC<Props> = (props) => {
  const { mode, channels, onShowModal, ...rest } = props;

  return (
    <Styled.Wrapper {...rest}>
      <Styled.Header>
        <Styled.Title mode={mode}>チャンネル</Styled.Title>
        <Styled.PlusBtn type="button" label={''} onClick={onShowModal} />
      </Styled.Header>
      <Styled.Content>
        <Styled.List>
          {channels.map((channel: ChannelIF, i: number) => {
            return (
              <Styled.ListItem key={i}>
                <Styled.ChannelLink to={`/room/${channel.id}`}>
                  {channel.is_public ? <Styled.StyleIconSharp /> : <Styled.StyleIconLock />}
                  <Styled.ChannelLabel>{channel.name}</Styled.ChannelLabel>
                </Styled.ChannelLink>
              </Styled.ListItem>
            );
          })}
        </Styled.List>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default ChannelPanel;
