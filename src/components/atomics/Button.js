import React, { memo } from 'react';

const Button = ({
  children = null,
  className = '',
  disabled = false,
  onClick = () => {},
  type = 'button',
}) => (
  <button
    className={className}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default memo(Button);