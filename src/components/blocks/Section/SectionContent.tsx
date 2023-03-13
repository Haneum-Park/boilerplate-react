import React, { memo } from 'react';

import { SectionContentWrap } from './styles';

export interface SectionContentProps {
  content: React.ReactNode;
  className?: string;
}

function SectionContent({ content, className }: SectionContentProps) {
  return <SectionContentWrap className={className}>{content}</SectionContentWrap>;
}

export default memo(SectionContent);
