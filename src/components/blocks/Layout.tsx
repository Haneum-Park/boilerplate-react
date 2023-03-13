import React, { memo } from 'react';
import styled from 'styled-components';

import MEDIA_QUERY from '@util/mediaQuery.util';

// import Header from './Header';
// import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode | string;
};

const LayoutWrap = styled.main`
  display: flex;
`;

const MainLayoutWrap = styled.div`
  display: flex;
  background-color: var(--color-black);
  margin-left: ${300 / 16}rem;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;
  z-index: 1;
  transition: opacity 0.2s ease-in-out;

  ${MEDIA_QUERY.max('sm-tablet')} {
    margin-left: 0px;
  }
`;

const MainSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > * {
    margin: calc(20rem / 16);
    &:not(:first-child) {
      margin-top: 0;
    }
  }
`;

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrap>
      {/* <Header /> */}
      <MainLayoutWrap>
        <MainSectionWrap>{children}</MainSectionWrap>
        {/* <Footer /> */}
      </MainLayoutWrap>
    </LayoutWrap>
  );
}

export default memo(Layout);
