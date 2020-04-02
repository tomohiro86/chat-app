import { createGlobalStyle } from 'styled-components';
import styledReset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${styledReset}
  html {
    max-width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
  body {
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    font-family: "Hiragino Kaku Gothic ProN W3", "ヒラギノ角ゴ ProN W3", Meiryo, sans-serif;
    color: #231815;
    background-color: #f8f9fa;
    line-height: 1.4;
    letter-spacing: 0.02rem;
    word-break: break-word;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }
  #root {
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: inherit;
    word-break: break-word;
    &.link {
      text-decoration: underline;
    }
    &:hover {
      text-decoration: none;
      transition: 0.3s;
    }
  }
  input {
    -webkit-appearance: none;
  }
  textarea {
    line-height: 1.8;
  }
  svg {
    vertical-align: middle;
  }
  input[type="text"]:focus,
  input[type="email"]:focus,
  button:focus {
    outline: 0;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-internal-autofill-selected {
    background-color: inherit !important;
  }
  h1, h2, h3 {
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    word-break: break-word;
  }
  p {
    padding: 0;
    margin: 0;
    word-break: break-word;
    box-sizing: border-box;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select:focus {
    outline: 0;
  }
  button {
    margin: 0;
    padding: 0;
    line-height: 1.8;
    border: none;
    font-weight: bold;
    box-sizing: border-box;
    transition: all ease 0.2s , background-color ease 0.4s;
    cursor: pointer;
    opacity: 1;
  }
  li {
    list-style-type: none;
  }
  b {
    font-weight: bold;
  }
  svg {
    background-color: inherit;
  }
  div {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
