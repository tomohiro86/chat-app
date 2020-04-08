import * as React from 'react';
import { Styled } from 'sc/organisms/ModalCreateChannel';

interface Prps {
  onCreateChannel: () => void;
}

const ModalCreateChannel: React.FC<Prps> = (props) => {
  const { onCreateChannel, ...rest } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <Styled.Wrapper {...rest}>
      <Styled.StyleModalHeader title="チャネルを作成する" onClick={onCreateChannel} />
      <Styled.Content>
        <Styled.StyleFieldInput
          type="text"
          name="name"
          value={''}
          label="名前"
          placeholder="例:計画・予算"
          errorMessage=""
          onChange={onChange}
        />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default ModalCreateChannel;
