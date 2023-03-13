import React, { memo } from 'react';
import styled from 'styled-components';

import type { TextProps } from '@atom/Input/Text';
import TextMsg from '@atom/Input/TextMsg';
import type { TextWarnMsgProps } from '@atom/Input/TextMsg';

import Text from '@atom/Input/Text';

export interface TextBoxProps extends TextProps, TextWarnMsgProps {}

const TextBoxWrap = styled.div`
  margin-bottom: calc(20rem / 16);
`;

function TextBox({ msg = '', msgColor = '', ...rest }: TextBoxProps) {
  return (
    <TextBoxWrap>
      <Text {...rest} />
      <TextMsg msg={msg} msgColor={msgColor} />
    </TextBoxWrap>
  );
}

export default memo(TextBox);
