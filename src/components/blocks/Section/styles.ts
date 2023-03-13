import styled from 'styled-components';

import MEDIA_QUERY from '@util/mediaQuery.util';

export interface SectionContainerStyleProps {
  h?: number;
}

export const SectionTitleWrap = styled.div`
  border-top-left-radius: calc(10rem / 16);
  border-top-right-radius: calc(10rem / 16);
  background-color: var(--color-grey-90);
`;

export const SectionContainerWrap = styled.div<SectionContainerStyleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: ${({ h }) => `${h}px`};
  padding-top: 0 !important;

  border-bottom-left-radius: calc(10rem / 16);
  border-bottom-right-radius: calc(10rem / 16);
  background-color: var(--color-grey-90);

  &.scroll {
    padding: calc(20rem / 16) 0;
    transition: box-shadow 0.2s ease-in-out;
    &:hover {
      padding: 0 0 calc(20rem / 16);
      box-shadow: inset 0 10px 10px -10px var(--color-white-30);
      > div {
        padding: calc(20rem / 16) calc(20rem / 16) 0;
      }
    }
    > div {
      padding: 0 calc(20rem / 16) 0;
      overflow-y: auto;
    }
  }
`;

export const SectionContentWrap = styled.div`
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
  padding: calc(5rem / 16) 0;

  &.sign-log {
    &.first {
      * {
        color: var(--color-grey-40);
      }
      &:first-child {
        padding-top: 0;
      }
    }
    display: grid;
    grid-template-columns: 0.7fr 1fr 0.7fr;
    align-items: center;
    padding: calc(8rem / 16) 0;
    border-bottom: 1px solid var(--color-grey-30);
    > div:nth-child(2) {
      text-align: center;
    }
    ${MEDIA_QUERY.max('mobile')} {
      grid-template-columns: 1.7fr 1.4fr 0.9fr;
      > div:last-child {
        span:first-child {
          display: none;
        }
        width: 100%;
        max-width: 65px;
        overflow-x: auto;
      }
    }
    &:last-child {
      border-bottom: 0;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .parsing-content-detail {
    margin-left: calc(20rem / 16);
  }
`;
