import Mock from 'mockjs'

import './user'

import './message-box'

import '~/views/dashboard/workplace/mock'

import '~/views/dashboard/monitor/mock'

import '~/views/account/category/mock'

import '~/views/account/material/mock'

import '~/views/course/courses/mock'

Mock.setup({
  timeout: '600-1000',
})
