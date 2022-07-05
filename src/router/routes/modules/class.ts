import type { AppRouteRecordRaw } from '../types'
import { DEFAULT_LAYOUT } from '~/router/constants'

const CLASS: AppRouteRecordRaw = {
  path: '/class',
  name: 'class',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '班级',
    requiresAuth: true,
    icon: 'icon-relation',
    order: 1,
  },
  children: [
    {
      path: 'classes',
      name: 'Classes',
      component: () => import('~/views/class/classes/index.vue'),
      meta: {
        locale: '班级管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'certificate',
      name: 'Certificate',
      component: () => import('~/views/class/certificate/index.vue'),
      meta: {
        locale: '证书管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'examination',
      name: 'Examination',
      component: () => import('~/views/class/examination/index.vue'),
      meta: {
        locale: '考试管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'question_bank',
      name: 'QuestionBank',
      component: () => import('~/views/class/question_bank/index.vue'),
      meta: {
        locale: '题库管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default CLASS
