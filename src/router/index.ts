import * as React from 'react';
import Home from '../pages/home';
import Todo from '../pages/todo';

export type RouteItem = {
  path: string;
  routeName: string;
  component: React.ReactNode;
  exact?: boolean;
  routes?: RouteItem;
};
const menu: RouteItem[] = [
  {
    path: '/home',
    routeName: 'home',
    component: Home,
    exact: true,
  },
  {
    path: '/todo',
    routeName: 'todo',
    component: Todo,
  },
];

export default menu;
