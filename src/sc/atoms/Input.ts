import styled from 'styled-components';

const InputBox = styled.input`
  color: #000000;
  font-size: 1.4rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  &:disabled {
    background-color: #ffffff;
    opacity: 1;
  }
  &:placeholder {
    color: #7c8a98;
  }
`;

export const Styled = {
  InputBox,
};
