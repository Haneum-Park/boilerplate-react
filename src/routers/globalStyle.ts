import { createGlobalStyle } from 'styled-components';

export const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Light.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-SemiBold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Heavy';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Heavy.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export const GlobalColorStyle = createGlobalStyle`
  :root {
    // ? Color Palette
    --color-primary-light: #5E7DC5;
    --color-primary-normal: #000370;
    --color-primary-dark: #0B0B45;
    --color-black: #0D1117;
    --color-white: #FFFFFF;
    --color-red: #FF0000;
    --color-magenta: #FF00FF;
    --color-blue: #0000FF;
    --color-cyan: #00FFFF;
    --color-green: #00FF00;
    --color-yellow: #FFD700;
    --color-grey: #808080;
    --color-grey-10: #1E2427;
    --color-grey-20: #2E363A;
    --color-grey-30: #41474C;
    --color-grey-40: #909090;
    --color-grey-50: #393B3F;
    --color-grey-80: #0F0F10;
    --color-grey-90: #191B1F;
    --color-white-10: #FDFDFD;
    --color-white-20: #F7F8F9;
    --color-white-30: #E9EBEE;

    --color-skeleton: #A5A5A54D;
    --color-skeleton-dark: #A5A5A580;

    // ? Font Weight
    --light: 300;
    --regular: 400;
    --semibold: 600;
    --bold: 700;
    --heavy: 900;
  }

`;

export const GlobalCommonStyle = createGlobalStyle`
  html,
  body,
  #__next {
    padding: 0;
    margin: 0;
    font-family: 'Light', 'Regular', 'SemiBold', 'Bold', 'Heavy';
    color: var(--color-white-20);
  }

  div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
  blockquote, pre, a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption, tbody, tfoot,
  thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output,
  ruby, section, summary, time, mark, audio, video {
    font-family: 'Light';
    box-sizing: border-box;
    user-select: none;
  }

  a { 
    text-decoration: none;
    color: var(--color-white-normal);
  }
  
  ul, li {
    list-style: none;
    padding-left: 0;
    margin-left: 0;
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
    background-color: var(--color-grey-90);
    color: var(--color-white);
    border-radius: calc(4rem / 16);
  }

  input::placeholder {
    color: var(--color-grey-30);
  }
`;
