import type { AppRouteRecordRaw } from '../types'
import { DEFAULT_LAYOUT } from '~/router/constants'

const ACCOUNT: AppRouteRecordRaw = {
  path: '/account',
  name: 'account',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '账号',
    requiresAuth: true,
    icon: 'icon-user',
    order: 4,
  },
  children: [
    {
      path: 'center',
      name: 'Center',
      component: () => import('~/views/account/center/index.vue'),
      meta: {
        locale: '账号详情',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'category',
      name: 'Category',
      component: () => import('~/views/account/category/index.vue'),
      meta: {
        locale: '分类管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'material',
      name: 'Material',
      component: () => import('~/views/account/material/index.vue'),
      meta: {
        locale: '素材管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default ACCOUNT
