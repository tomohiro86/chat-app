import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ModalHeader from 'components/molecules/ModalHeader';
import FieldInput from 'components/molecules/FieldInput';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 60%;
  max-width: 520px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.06);
  transform: translate(-50%, -50%);
`;

const StyleModalHeader = styled(ModalHeader)``;

const Content = styled.div`
  padding: 20px 20px 30px;
`;

const StyleFieldInput = styled(FieldInput)`
  margin-top: 16px;
  &:first-child {
    margin-top: 0;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
`;

const SubmitBtn = styled(Button)`
  padding: 5px 20px 4px;
`;

export const Styled = {
  Wrapper,
  StyleModalHeader,
  Content,
  StyleFieldInput,
  ButtonArea,
  SubmitBtn,
};
