import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'Theme';
import Button from 'components/atoms/Button';
import ErrorMessage from 'components/atoms/ErrorMessage';
import FieldInput from 'components/molecules/FieldInput';

const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
`;

const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  width: 60%;
  max-width: 600px;
  margin: auto;
  padding: 40px 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  line-height: 2.5rem;
`;

const Content = styled.div`
  width: 72%;
  margin: 20px auto 0;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const StyleFieldInput = styled(FieldInput)`
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

const ButtonArea = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const SubmitBtn = styled(Button)`
  width: 100%;
`;

const ErrorArea = styled.div`
  margin-top: 20px;
`;

const StyleErrorMessage = styled(ErrorMessage)``;

const LinkArea = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const StyleLink = styled(Link)`
  color: ${theme.primaryColor};
`;

export const Styled = {
  Wrapper,
  Container,
  Title,
  Content,
  Form,
  StyleFieldInput,
  ButtonArea,
  SubmitBtn,
  ErrorArea,
  StyleErrorMessage,
  LinkArea,
  StyleLink,
};
