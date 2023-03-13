/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { memo } from 'react';
import styled from 'styled-components';

export interface SkeletonStyleProps {
  display?: string;
  w?: number;
  h?: number;
  bdr?: number;
  bd?: string;
  margin?: string;
  padding?: string;
  bgColor?: string;
  circle?: boolean;
  square?: boolean;
  justifyContent?: string;
}

export interface SkeletonProps extends SkeletonStyleProps {
  count?: number;
}

const SkeletonWrap = styled.div<SkeletonStyleProps>`
  @keyframes skeleton-gradient {
    0% {
      background-color: var(--color-skeleton);
    }
    50% {
      background-color: var(--color-skeleton-dark);
    }
    100% {
      background-color: var(--color-skeleton);
    }
  }

  display: ${({ display }) => display || 'inherit'};
  width: ${({ w }) => (w ? `calc(${w}rem / 16)` : 'inherit')} !important;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  height: ${({ square, w, h }) =>
    square ? `calc(${w}rem / 16)` : h ? `calc(${h}rem / 16)` : 'inherit'} !important;
  border: ${({ bd }) => bd || 'none'} !important;
  border-radius: ${({ bdr, circle }) =>
    circle ? '100%' : `calc(${bdr || bdr === 0 ? bdr : 10}rem / 16)`} !important;
  margin: ${({ margin }) => margin || '0'} !important;
  padding: ${({ padding }) => padding || '0'} !important;
  ${({ bgColor }) => (bgColor ? `background-color: var(${bgColor}) !important;` : '')}
  animation: skeleton-gradient 1.8s infinite ease-in-out !important;
`;

function Skeleton({
  display,
  w,
  h,
  bdr,
  bd,
  margin,
  padding,
  bgColor,
  circle,
  square,
  justifyContent,
  count = 1,
}: SkeletonProps) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <SkeletonWrap
            key={idx}
            display={display}
            w={w}
            h={h}
            bdr={bdr}
            bd={bd}
            margin={margin}
            padding={padding}
            bgColor={bgColor}
            circle={circle}
            square={square}
            justifyContent={justifyContent}
          />
        ))}
    </>
  );
}

export default memo(Skeleton);
