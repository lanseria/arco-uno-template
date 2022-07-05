import type { AppRouteRecordRaw } from '../types'
import { DEFAULT_LAYOUT } from '~/router/constants'

const COURSE: AppRouteRecordRaw = {
  path: '/course',
  name: 'course',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '课程',
    requiresAuth: true,
    icon: 'icon-book',
    order: 2,
  },
  children: [
    {
      path: 'courses',
      name: 'Courses',
      component: () => import('~/views/course/courses/index.vue'),
      meta: {
        locale: '课程管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'lecturer',
      name: 'Lecturer',
      component: () => import('~/views/course/lecturer/index.vue'),
      meta: {
        locale: '讲师管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
}

export default COURSE
