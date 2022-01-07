import React, { memo } from 'react';

const Label = ({
  htmlFor = '',
  children = null,
  className = '',
}) => (
  <label
    htmlFor={htmlFor}
    className={className}
  >{children}</label>
);

export default memo(Label);