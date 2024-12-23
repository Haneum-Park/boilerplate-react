/* eslint-disable react/jsx-key */
import React, { memo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@block/Layout';

import routers from './index.router';

const App = () => (
  <BrowserRouter>
    <Routes>
      {routers.map(({ comp: Comp, childs, ...rest }) => (
        <Route
          {...rest}
          element={
            <Layout>
              <Comp />
            </Layout>
          }
        >
          {childs &&
            childs.length > 0 &&
            childs.map(({ comp: ChildComp, ...child }) => (
              <Route
                {...child}
                element={
                  <Layout>
                    <ChildComp />
                  </Layout>
                }
              />
            ))}
        </Route>
      ))}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>
);

export default memo(App);
