import React, { memo } from 'react';

import { SectionContainerWrap } from './styles';
import type { SectionContainerStyleProps } from './styles';

export interface SectionContainerProps extends SectionContainerStyleProps {
  content: React.ReactNode | string;
  isScroll?: boolean;
}

function SectionContainer({ isScroll = false, content, h = 300 }: SectionContainerProps) {
  return (
    <SectionContainerWrap h={h} className={isScroll ? 'scroll' : ''}>
      {content}
    </SectionContainerWrap>
  );
}

export default memo(SectionContainer);
