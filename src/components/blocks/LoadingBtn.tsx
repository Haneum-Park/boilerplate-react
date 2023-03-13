import React, { memo } from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';

import type { BtnProps } from '@atom/Button';
import Button from '@atom/Button';
import TextMsg from '@atom/Input/TextMsg';
import type { TextWarnMsgProps } from '@atom/Input/TextMsg';

import { proxyBtnLoad } from '@store/btnLoading';

interface LoadingSpinnerProps {
  size?: number;
}

interface LoadingBtnProps extends BtnProps, LoadingSpinnerProps, TextWarnMsgProps {
  child?: React.ReactNode | string;
}

export const LoadingSpinner = styled.span<LoadingSpinnerProps>`
  display: inline-block;
  width: ${({ size }) => `calc(${size || 13}rem / 16)`};
  height: ${({ size }) => `calc(${size || 13}rem / 16)`};
  &::after {
    content: '';
    display: block;
    width: ${({ size }) => `calc(${size || 13}rem / 16)`};
    height: ${({ size }) => `calc(${size || 13}rem / 16)`};
    border: calc(2rem / 16) solid var(--color-white-20);
    border-radius: 50%;
    border-top-color: var(--color-primary-dark);
    animation: loading 1s linear infinite;
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const LoadingBtnWrap = styled.div``;

function LoadingBtn({ msg, msgColor, child, size = 13, ...rest }: LoadingBtnProps) {
  const { isLoading } = useSnapshot(proxyBtnLoad);

  return (
    <LoadingBtnWrap>
      <Button disabled={isLoading} {...rest}>
        {isLoading ? <LoadingSpinner size={size} /> : child}
      </Button>
      <TextMsg msg={msg} msgColor={msgColor} />
    </LoadingBtnWrap>
  );
}

export default memo(LoadingBtn);
