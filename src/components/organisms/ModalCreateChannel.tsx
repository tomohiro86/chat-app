import * as React from 'react';
import { db } from 'firebaseConfig';
import { useDispatch } from 'react-redux';
import { hideModal } from 'module/modal/action';
import { Styled } from 'sc/organisms/ModalCreateChannel';

interface ValueIF {
  name: string;
  description: string;
  [key: string]: string;
}

const initialValue = {
  name: '',
  description: '',
};

const ModalCreateChannel: React.FC = (props) => {
  const dispatch = useDispatch();
  const { ...rest } = props;
  const [value, setValue] = React.useState<ValueIF>(initialValue);

  const channelsRef = db.collection('channels');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = { ...value };
    newValue[event.target.name] = event.target.value;
    setValue(newValue);
  };

  const handleCreate = () => {
    channelsRef
      .add({
        name: value.name,
        description: value.description,
        is_public: true,
      })
      .then((res: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>) => {
        console.log(res.id);
        setValue(initialValue);
        dispatch(hideModal());
      })
      .catch((error) => console.log(error));
  };

  return (
    <Styled.Wrapper {...rest}>
      <Styled.StyleModalHeader title="チャネルを作成する" onClick={() => dispatch(hideModal())} />
      <Styled.Content>
        <Styled.StyleFieldInput
          type="text"
          name="name"
          value={value.name}
          label="名前"
          placeholder="例:計画・予算"
          errorMessage=""
          onChange={handleChange}
        />
        <Styled.StyleFieldInput
          type="text"
          name="description"
          value={value.description}
          label="説明"
          placeholder=""
          errorMessage=""
          isOptional={true}
          onChange={handleChange}
        />
        <Styled.ButtonArea>
          <Styled.SubmitBtn
            theme="primary"
            type="submit"
            label={'作成'}
            disabled={!value.name}
            onClick={handleCreate}
          />
        </Styled.ButtonArea>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default ModalCreateChannel;
