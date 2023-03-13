import React, { memo } from 'react';
import styled from 'styled-components';

const ImgWrap = styled.img`
  width: 100%;
`;

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function Image(props: ImgProps) {
  return <ImgWrap {...props} />;
}

export default memo(Image);
