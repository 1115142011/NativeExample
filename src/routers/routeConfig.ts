import React from 'react';
import Details from '@pages/Details';
import Home from '@pages/Home';
import Login from '@pages/Login';

type ScreenOptions = {
  title?: string;
  headerStyle?: {backgroundColor: string};
  headerTintColor?: string;
  headerShown?: boolean;
  headerShadowVisible?: boolean;
  headerTransparent?: boolean;
};

type RouteItem = {
  name: string; // 路由path
  component: React.ComponentType<any>; // 路由组件首字母需要大写
  isLive?: boolean; // 是否实时渲染
  options?: ScreenOptions;
};

/** 底部tab 导航 */
export const TabNavigator: RouteItem[] = [];

/** 普通路由 */
export const OrdinaryNavigation: RouteItem[] = [
  {
    name: '/main',
    // options: {title: '首页'},
    component: Home,
  },
  {
    name: '/details',
    component: Details,
  },
];

/**
 * 游离于主要业务板块外的路由并与主要业务板块的路由隔离
 */
export const ExtraNavigation: RouteItem[] = [
  {
    name: '/login',
    options: {headerShown: false},
    component: Login,
  },
];
