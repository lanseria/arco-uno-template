import Mock from 'mockjs'
import qs from 'query-string'
import setupMock, { successResponseWrap } from '~/utils/setup-mock'
import type { GetParams } from '~/types/global'

const { Random } = Mock

const data = Mock.mock({
  'list|55': [
    {
      'id|4': /[A-Z][a-z][-][0-9]/,
      'name|1': ['生产经营单位一线员工安全生产责任清单及实践通用版', '其他管理人员安全生产责任清单及实践'],
      'categoryName|1': ['全员安全生产责任制', '中化能源“业务理解”主题培训', '船岸延伸管理'],
      'cover|1': ['/photo-1588153191435-c890d9adbb99.jpeg', '/photo-1612334001559-947862cc2202.jpeg'],
      'status|1': ['0', '1', '2'],
      'createdTime': Random.datetime(),
    },
  ],
})

const detail = Mock.mock({
  'id|4': /[A-Z][a-z][-][0-9]/,
  'name|1': ['生产经营单位一线员工安全生产责任清单及实践通用版', '其他管理人员安全生产责任清单及实践'],
  'categoryName|1': ['全员安全生产责任制', '中化能源“业务理解”主题培训', '船岸延伸管理'],
  'cover|1': ['/photo-1588153191435-c890d9adbb99.jpeg', '/photo-1612334001559-947862cc2202.jpeg'],
  'status|1': ['0', '1', '2'],
  'createdTime': Random.datetime(),
})

const chapterTree = Mock.mock({
  'list|10': [
    {
      'id|1': /[0-9]/,
      'name|1': ['第一章', '第二章', '第三章'],
      'children|10': [
        {
          'id|1': /[0-9]/,
          'name|1': ['生产经营单位一线员工安全生产责任清单及实践通用版', '其他管理人员安全生产责任清单及实践'],
        },
      ],
    },
  ],
})

setupMock({
  setup() {
    Mock.mock('/api/course/chapter/1', () => {
      return successResponseWrap(chapterTree.list)
    })
    Mock.mock('/api/course/detail/1', () => {
      return successResponseWrap(detail)
    })
    Mock.mock(/\/api\/course\/page/, (params: GetParams) => {
      const { current = 1, pageSize = 10 } = qs.parseUrl(params.url).query
      const p = current as number
      const ps = pageSize as number
      return successResponseWrap({
        list: data.list.slice((p - 1) * ps, p * ps),
        total: 55,
      })
    })
  },
})
