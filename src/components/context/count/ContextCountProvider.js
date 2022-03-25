import React, { useState, useCallback } from 'react';

import { AppContext } from '@src/contexts';

const ContextCountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <AppContext.Provider
      value={{
        count,
        addCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextCountProvider;
