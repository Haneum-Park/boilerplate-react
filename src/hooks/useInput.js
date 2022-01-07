import { useState, useCallback } from 'react';

const useInput = (initialState) => {
  const [state, setState] = useState(initialState);
  const handleInput = useCallback((e) => setState(e.target.value), [state]);

  return [state, handleInput, setState];
};

export default useInput;
