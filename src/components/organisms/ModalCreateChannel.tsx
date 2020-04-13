import * as React from 'react';
import { Styled } from 'sc/organisms/ModalCreateChannel';

interface Prps {
  onCreateChannel: () => void;
}

interface ValueIF {
  name: string;
  description: string;
  [key: string]: string;
}

const initialValue = {
  name: '',
  description: '',
};

const ModalCreateChannel: React.FC<Prps> = (props) => {
  const { onCreateChannel, ...rest } = props;
  const [value, setValue] = React.useState<ValueIF>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = { ...value };
    newValue[event.target.name] = event.target.value;
    setValue(newValue);
  };

  return (
    <Styled.Wrapper {...rest}>
      <Styled.StyleModalHeader title="チャネルを作成する" onClick={onCreateChannel} />
      <Styled.Content>
        <Styled.StyleFieldInput
          type="text"
          name="name"
          value={value.name}
          label="名前"
          placeholder="例:計画・予算"
          errorMessage=""
          onChange={onChange}
        />
        <Styled.StyleFieldInput
          type="text"
          name="description"
          value={value.description}
          label="説明"
          placeholder=""
          errorMessage=""
          isOptional={true}
          onChange={onChange}
        />
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default ModalCreateChannel;
