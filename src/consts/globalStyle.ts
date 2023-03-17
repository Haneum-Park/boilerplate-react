import { createGlobalStyle } from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
  /*
   * ====================
   *   GLOBAL FONT FACE
   * ====================
   */
  @font-face {
    font-family: 'Thin';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'ExtraLight';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Light';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Medium';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'ExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Heavy';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
`;

export const GlobalColorStyle = createGlobalStyle`
  :root {
    // ? Color Palette
    --color-white: #fff;
    --color-black: #000;
    --color-red: #ff0000;
    --color-green: #00ff00;
    --color-blue: #0000ff;
    --color-midnight: 302e41;
    --color-midnight-purple: #342048;

    --color-gray-0: #f8f9fa;
    --color-gray-1: #f1f3f5;
    --color-gray-2: #e9ecef;
    --color-gray-3: #dee2e6;
    --color-gray-4: #ced4da;
    --color-gray-5: #adb5bd;
    --color-gray-6: #868e96;
    --color-gray-7: #495057;
    --color-gray-8: #343a40;
    --color-gray-9: #212529;

    --color-skeleton: #A5A5A54D;
    --color-skeleton-dark: #A5A5A580;
  }

`;

export const GlobalCommonStyle = createGlobalStyle`
  html, body {
    width: 100%;
    min-width: 100%;
    height: 100%;
    font-family: 'Regular';
    background-color: var(--color-gray-0);
    color: var(--color-default);
    margin: 0;
    padding: 0;
  }

  div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption, tbody, tfoot,
  thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output,
  ruby, section, summary, time, mark, audio, video {
    color: var(--color-gray-9);
    font-family: 'Regular';
    user-select: none;
  }

  *, *::after, *::before {
    color: var(--color-gray-9);
    font-family: 'Regular';
    box-sizing: border-box;
  }

  a { 
    text-decoration: none;
    color: var(--color-gray-9);
  }
  
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
  }

  button, a, input[type=button], input[type=submit] {
    cursor: pointer;
  }

  label {
    user-select: none;
  }

  button:focus, select:focus, select:active, button:active, input:active, input:focus {
    outline: none !important;
  }

  input {
    border: none !important;
    background-color: var(--color-white);
    color: var(--color-gray-9);
    border-radius: calc(4rem / 16);
  }

  input::placeholder {
    color: var(--color-gray-3);
  }
`;
