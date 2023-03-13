import styled from 'styled-components';

import { BtnWrap } from '@atom/Button';

export const ModalWrap = styled.div`
  & > * {
    margin-bottom: calc(20rem / 16);
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ModalContentColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  > label {
    margin-bottom: calc(8rem / 16);
  }
  > div {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const ModalContentRowWrap = styled(ModalContentColumnWrap)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ModalFooterWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

type ModalFooterBtnStyle = {
  bgColor?: string;
};

export const ModalFooterBtn = styled(BtnWrap)<ModalFooterBtnStyle>`
  width: calc(120rem / 16);
  background-color: var(${({ bgColor }) => bgColor ?? '--color-primary-normal'});
`;
