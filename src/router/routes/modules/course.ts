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
      redirect: '/course/courses/page',
      meta: {
        locale: '课程管理',
        requiresAuth: true,
        hideInMenu: false,
        activeMenu: 'Courses',
        roles: ['*'],
      },
      children: [
        {
          path: 'page',
          name: 'CoursesPage',
          component: () => import('~/views/course/courses/index.vue'),
          meta: {
            locale: '课程管理',
            activeMenu: 'Courses',
            requiresAuth: true,
            hideInMenu: true,
            roles: ['*'],
          },
        },
        {
          path: 'new',
          name: 'CoursesNew',
          component: () => import('~/views/course/courses/new.vue'),
          meta: {
            locale: '新建课程',
            activeMenu: 'Courses',
            requiresAuth: true,
            hideInMenu: true,
            roles: ['*'],
          },
        },
        {
          path: 'edit/:id',
          name: 'CoursesEdit',
          component: () => import('~/views/course/courses/edit.vue'),
          meta: {
            locale: '编辑课程',
            activeMenu: 'Courses',
            requiresAuth: true,
            hideInMenu: true,
            roles: ['*'],
          },
        },
        {
          path: 'detail/:id',
          name: 'CoursesDetail',
          component: () => import('~/views/course/courses/detail.vue'),
          meta: {
            locale: '课程详情',
            activeMenu: 'Courses',
            requiresAuth: true,
            hideInMenu: true,
            roles: ['*'],
          },
        },
      ],
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
