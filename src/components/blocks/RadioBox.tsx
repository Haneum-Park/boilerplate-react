import React, { memo } from 'react';
import styled from 'styled-components';

import type { RadioStyleProps } from '@atom/Input/Radio';
import Radio from '@atom/Input/Radio';
import type { TextWarnMsgProps } from '@atom/Input/TextMsg';
import TextMsg from '@atom/Input/TextMsg';

type RadioData = {
  value: any;
  checked?: boolean;
  label: string;
  htmlFor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  key: any;
};

interface RadioBoxProps extends RadioStyleProps, TextWarnMsgProps {
  title: string;
  datas: RadioData[];
}

const RadioBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioGroupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const RadioGroupTitle = styled.div`
  color: var(--color-white-20);
  font-size: 14px;
`;

const RadioGroupContentWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;
`;

function RadioBox({ title, name, datas, msg, msgColor, ...rest }: RadioBoxProps) {
  return (
    <RadioBoxWrap>
      <RadioGroupWrap>
        {title && <RadioGroupTitle>{title}</RadioGroupTitle>}
        <RadioGroupContentWrap>
          {datas.map(({ htmlFor, value, label, checked, onChange, key }, idx) => (
            <Radio
              key={`${key}-${idx}`}
              name={name}
              label={label}
              htmlFor={htmlFor}
              value={value}
              onChange={onChange}
              checked={checked}
              {...rest}
            />
          ))}
        </RadioGroupContentWrap>
      </RadioGroupWrap>
      <TextMsg msg={msg} msgColor={msgColor} />
    </RadioBoxWrap>
  );
}

export default memo(RadioBox);
