import React, { memo } from 'react';
import styled from 'styled-components';

import Input from '@atomic/Input';
import Label from '@atomic/Label';

const FormGroup = styled.div``;

const FormInputWrap = styled.div``;

const FormInput = ({
  input = {
    type: 'text',
    className: '',
    id: '',
    name: '',
    value: '',
    onChange: () => {},
    disabled: false,
    placeholder: '',
    autoComplete: false,
    readOnly: false,
  },
  label = {
    htmlFor: '',
    className: '',
    chidlren: '',
  },
}) => (
  <FormGroup>
    <Label {...label} />
    <FormInputWrap>
      <Input {...input} />
    </FormInputWrap>
  </FormGroup>
);

export default memo(FormInput);