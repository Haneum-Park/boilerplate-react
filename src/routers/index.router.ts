import React from 'react';

import Index from '@page/index';

type Router = {
  path: string;
  comp: React.FC;
  key: string;
  childs?: {
    path: string;
    comp: React.FC;
    key: string;
  }[];
};

const routers: Router[] = [
  {
    path: '/',
    comp: Index,
    key: 'index',
  },
];

export default routers;
