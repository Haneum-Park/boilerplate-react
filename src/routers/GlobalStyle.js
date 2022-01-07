import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'nimbus-sans-extended', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 10px;
  }

  body {
    max-height: 100%;
    max-width: 1980px; margin: 0 auto; width: 100%;
    background-color: #0a141e;
  }

  #root {
    height: 100%;
    background-color: #0a141e;
  }

  ul, ol, li {
    list-style: none;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #000;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  input[type="button"] {
      cursor: pointer;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="search"],
  input[type="image"],
  input[type="tel"],
  input[type="button"],
  input[type="submit"],
  input[type="number"],
  textarea {
      -webkit-appearance: none;
      -webkit-border-radius: 0;
      outline: none;
  }

  input[type="text"]::placeholder,
  input[type="tel"]::placeholder {
      color: #868d96;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;

export default GlobalStyle;
