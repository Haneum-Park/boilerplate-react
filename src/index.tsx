import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@router/index';

import { GlobalFontStyle, GlobalColorStyle, GlobalCommonStyle } from '@router/globalStyle';

const rootNode = document.getElementById('root');

const root = ReactDOM.createRoot(rootNode as Element | DocumentFragment);

root.render(
  <React.StrictMode>
    <GlobalFontStyle />
    <GlobalColorStyle />
    <GlobalCommonStyle />
    <App />
  </React.StrictMode>,
);
