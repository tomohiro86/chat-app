import styled from 'styled-components';
import ModalHeader from 'components/molecules/ModalHeader';
import FieldInput from 'components/molecules/FieldInput';

const Wrapper = styled.div``;

const StyleModalHeader = styled(ModalHeader)``;

const Content = styled.div`
  padding: 20px;
`;

const StyleFieldInput = styled(FieldInput)`
  margin-top: 16px;
  &:first-child {
    margin-top: 0;
  }
`;

export const Styled = {
  Wrapper,
  StyleModalHeader,
  Content,
  StyleFieldInput,
};
