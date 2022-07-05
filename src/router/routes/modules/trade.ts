import type { AppRouteRecordRaw } from '../types'
import { DEFAULT_LAYOUT } from '~/router/constants'

const TRADE: AppRouteRecordRaw = {
  path: '/trade',
  name: 'trade',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '交易',
    requiresAuth: true,
    icon: 'icon-stamp',
    order: 3,
  },
  children: [
    {
      path: 'order',
      name: 'Order',
      component: () => import('~/views/trade/order/index.vue'),
      meta: {
        locale: '订单中心',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'invoicing',
      name: 'Invoicing',
      component: () => import('~/views/trade/invoicing/index.vue'),
      meta: {
        locale: '开票管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default TRADE
