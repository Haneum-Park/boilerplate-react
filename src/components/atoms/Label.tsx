import React, { memo } from 'react';
import styled from 'styled-components';

export interface LabelStyleProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export interface LabelProps extends LabelStyleProps {}

const LabelWrap = styled.label<LabelStyleProps>`
  color: var(--color-white-20);
  font-size: 14px;
`;

function Label({ children, ...rest }: LabelProps) {
  return <LabelWrap {...rest}>{children}</LabelWrap>;
}

export default memo(Label);
