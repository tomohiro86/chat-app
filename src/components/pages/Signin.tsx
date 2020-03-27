import React from 'react';
import styled from 'styled-components';

const Signin: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  return (
    <Wrapper>
      <Content>
        <Title>Chat APPにサインイン</Title>
        <Form>
          <Description>メールアドレスとパスワードを入力してください。</Description>
        </Form>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
`;

const Content = styled.div`
  width: 64%;
  margin: 60px auto 0;
  padding: 20px;
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

const Form = styled.form`
  width: 86%;
  margin: 0 auto;
`;

const Description = styled.p``;

export default Signin;
