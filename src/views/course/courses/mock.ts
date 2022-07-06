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
      'cover': 'https://source.unsplash.com/collection/94734566/80x50',
      'status|1': ['0', '1', '2'],
      'createdTime': Random.datetime(),
    },
  ],
})

setupMock({
  setup() {
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