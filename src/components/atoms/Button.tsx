import React, { memo } from 'react';
import styled from 'styled-components';

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | string;
}

export const BtnWrap = styled.button`
  width: 100%;
  color: var(--color-white-20);
  background-color: var(--color-primary-normal);
  border-radius: calc(16rem / 16);
  padding: calc(10rem / 16);
`;

function Button({ type = 'button', children, onClick, ...rest }: BtnProps) {
  return (
    <BtnWrap type={type} onClick={onClick} {...rest}>
      {children}
    </BtnWrap>
  );
}

export default memo(Button);
