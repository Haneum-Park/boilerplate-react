import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { RecoilRoot } from 'recoil';

import Root from '@router/index';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <RecoilRoot> */}
      <Root />
      {/* </RecoilRoot> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
