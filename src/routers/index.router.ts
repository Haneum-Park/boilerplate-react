import React from 'react';

import Root from '@page/index';

type Router = {
  path: string;
  component: React.FC;
  key: string;
  child?: {
    childPath: string;
    childComp: React.FC;
    childKey: string;
  }[];
};

const routers: Router[] = [
  {
    path: '/',
    component: Root,
    key: 'root',
    child: [],
  },
];

export default routers;
