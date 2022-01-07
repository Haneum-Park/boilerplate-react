import React, { memo } from 'react';

const Input = ({
  type = 'text',
  id = '',
  name = '',
  className = '',
  value = '',
  onChange = () => {},
  disabled = false,
  placeholder = '',
  autoComplete = false,
  readOnly = false,
}) => (
  <input
    type={type}
    id={id}
    name={name}
    className={className}
    value={value}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
    autoComplete={autoComplete ? 'on' : 'off'}
    readOnly={readOnly}
  />
);

export default memo(Input);