import React from 'react';

type RouteItem = {
  name: string; // 路由path
  component: React.ComponentType<any>; // 路由组件
  isLive?: boolean; // 是否实时渲染
};
/** 底部tab 导航 */
export const TabNavigator: RouteItem[] = [];
/** 普通路由 */
export const OrdinaryNavigation: RouteItem[] = [];

/**
 * 游离于主要业务板块外的路由并与主要业务板块的路由隔离
 */
export const ExtraNavigation: RouteItem[] = [];
