import styled from 'styled-components';
import Input from 'components/atoms/Input';
import ErrorMessage from 'components/atoms/ErrorMessage';
import OptionalLabel from 'components/atoms/OptionalLabel';

interface StyleInputIF {
  isError: boolean;
}

const Field = styled.div``;

const FieldTxt = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 21px;
  color: rgba(31, 31, 31, 0.9);
`;

const StyleInput = styled(Input)`
  width: 100%;
  margin-top: 12px;
  padding: 10px 12px 9px;
  background: ${(props: StyleInputIF) => (props.isError ? 'rgba(248, 76, 74, 0.18)' : '#ffffff')};
  border: ${(props: StyleInputIF) => (props.isError ? '1px solid #F84C4A' : '1px solid #cccccc')};
  box-sizing: border-box;
  border-radius: 8px;
`;

const StyleErrorMessage = styled(ErrorMessage)`
  margin-top: 4px;
`;

const StyleOptionalLabel = styled(OptionalLabel)`
  margin-left: 8px;
`;

export const Styled = {
  Field,
  FieldTxt,
  StyleInput,
  StyleErrorMessage,
  StyleOptionalLabel,
};
