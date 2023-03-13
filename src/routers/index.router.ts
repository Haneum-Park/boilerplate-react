import React from 'react';

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

const routers: Router[] = [];

export default routers;
