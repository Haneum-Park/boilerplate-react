import React from 'react';

const useInputObject = (initialState) => {
  const [state, setState] = React.useState(initialState);
  const handleInput = React.useCallback((e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }, [state]);

  return [state, handleInput, setState];
};

export default useInputObject;
