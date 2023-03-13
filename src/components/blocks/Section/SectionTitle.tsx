import React, { memo } from 'react';

import { SectionTitleWrap } from './styles';

export interface SectionTitleProps {
  title?: React.ReactNode | string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return <SectionTitleWrap>{title}</SectionTitleWrap>;
}

export default memo(SectionTitle);
