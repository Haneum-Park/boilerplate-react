import React, { memo } from 'react';
import styled from 'styled-components';

interface TextStyleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: string;
}

export const TextWrap = styled.input<TextStyleProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || 'calc(100% - calc(14rem / 16))'};
  height: 35px;
  padding-left: calc(10rem / 16);
  border: 1px solid var(--color-primary-light);
`;

export interface TextProps extends TextStyleProps {}

function Text({ value, ...rest }: TextProps) {
  return <TextWrap {...rest} value={value || ''} />;
}

export default memo(Text);
