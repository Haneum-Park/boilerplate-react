import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@router/index';

import { GlobalFontStyle, GlobalColorStyle, GlobalCommonStyle } from '@const/globalStyle';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode as Element | DocumentFragment);

root.render(
  <React.StrictMode>
    <GlobalFontStyle />
    <GlobalColorStyle />
    <GlobalCommonStyle />
    <App />
  </React.StrictMode>,
);
