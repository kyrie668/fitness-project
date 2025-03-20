import { Navigate } from 'react-router';
import SuspenseLazy from '@/components/suspense-lazy';
import Page404 from './pages/page404';
import React from 'react';

const Home = SuspenseLazy(() => import('@/pages/home'));

const Buy = SuspenseLazy(() => import('@/pages/buy'));
const Fund = SuspenseLazy(() => import('@/pages/fund'));
const Detail = SuspenseLazy(() => import('@/pages/detail'));
const BuyDetail = SuspenseLazy(() => import('@/pages/buy-detail'));

export const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />, // 重定向
    render: false,
  },
  {
    path: '/home',
    name: '首页',
    element: Home,
    render: true,
  },
  {
    // path: '/center',
    name: '个人中心',
    // element: Center,
    render: true,
    children: [
      {
        path: '/center/buy',
        element: Buy,
        name: '购买记录',
        render: true,
      },
      {
        path: '/center/fund',
        element: Fund,
        name: '资金记录',
        render: true,
      },
    ],
  },
  {
    path: '/detail/:id',
    element: Detail,
    name: '详情',
    render: false,
  },
  {
    path: '/buyDetail/:id',
    element: BuyDetail,
    name: '购买详情',
    render: false,
  },

  // 未匹配到页面
  {
    path: '*',
    element: <Page404 />,
  },
];
