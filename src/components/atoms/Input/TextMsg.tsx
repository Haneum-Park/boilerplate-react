import React, { memo } from 'react';
import styled from 'styled-components';

interface TextWarnMsgStyleProps {
  msgColor?: string;
}

export interface TextWarnMsgProps extends TextWarnMsgStyleProps {
  msg?: string;
}

const TextWarnMsgWrap = styled.div<TextWarnMsgStyleProps>`
  margin-top: calc(5rem / 16);
  font-size: calc(12rem / 16);
  color: var(${({ msgColor }) => msgColor || '--color-red'});
`;

function TextMsg({ msgColor, msg }: TextWarnMsgProps) {
  return msg ? <TextWarnMsgWrap msgColor={msgColor}>{msg}</TextWarnMsgWrap> : null;
}

export default memo(TextMsg);
