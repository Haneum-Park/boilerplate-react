import React, { useContext } from 'react';

import { AppContext } from '@src/contexts';

function ContextCountLabel() {
  const { count } = useContext(AppContext);
  return <div style={{ color: '#fff' }}>카운트: {count}</div>;
}

export default ContextCountLabel;
