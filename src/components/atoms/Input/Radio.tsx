import React, { memo } from 'react';
import styled from 'styled-components';

import Label from '@atom/Label';

export interface RadioStyleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface RadioProps extends RadioStyleProps {
  label: string;
  htmlFor: string;
}

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 0.5rem;
`;

export const RadioWrap = styled.input`
  padding: 0;
  margin-top: 0;
`;

function Radio({ label, htmlFor, ...rest }: RadioProps) {
  return (
    <RadioContainer>
      <Label htmlFor={htmlFor}>{label}</Label>
      <RadioWrap type='radio' {...rest} id={htmlFor} />
    </RadioContainer>
  );
}

export default memo(Radio);
