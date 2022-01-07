import React, { memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Header from '@molecule/common/Header';
import Footer from '@molecule/common/Footer';

import GlobalStyle from './globalStyle';
import routers from './routers';

function Root() {
  return (
    <HelmetProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        {routers.map(({ key, path, component: Component, child }) => (
          <Route key={key} path={path} element={<Component />}>
            {child.length > 0
              ? child.map(({ childKey, childPath, childComponent: ChildComponent }) => (
                  <Route key={childKey} path={childPath} element={<ChildComponent />} />
                ))
              : null
            }
          </Route>
        ))}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default memo(Root);