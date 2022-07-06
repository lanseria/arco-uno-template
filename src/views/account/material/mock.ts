import Mock from 'mockjs'
import setupMock, { successResponseWrap } from '~/utils/setup-mock'
import type { ServiceRecord } from '~/api/list'
const { Random } = Mock
const qualityInspectionList: ServiceRecord[] = [
  {
    id: 1,
    name: 'quality',
    title: '视频类-历史导入',
    description: '2021-10-12 00:00:00',
    cover: Random.dataImage('200x150', '视频类-历史导入'),
    data: [
      {
        label: '待质检数',
        value: '120',
      },
      {
        label: '积压时长',
        value: '60s',
      },
      {
        label: '待抽检数',
        value: '0',
      },
    ],
  },
  {
    id: 2,
    name: 'quality',
    title: '图文类-图片版权',
    description: '2021-12-11 18:30:00',
    cover: Random.dataImage('200x150', '图文类-图片版权'),
    data: [
      {
        label: '待质检数',
        value: '120',
      },
      {
        label: '积压时长',
        value: '60s',
      },
      {
        label: '待抽检数',
        value: '0',
      },
    ],
  },
  {
    id: 3,
    name: 'quality',
    title: '图文类-高清图片',
    description: '2021-10-15 08:10:00',
    cover: Random.dataImage('200x150', '图文类-高清图片'),
    data: [
      {
        label: '待质检数',
        value: '120',
      },
      {
        label: '积压时长',
        value: '60s',
      },
      {
        label: '待抽检数',
        value: '0',
      },
    ],
  },
]

setupMock({
  setup() {
    // Quality Inspection
    Mock.mock(/\/api\/list\/quality-inspection/, () => {
      return successResponseWrap(
        qualityInspectionList.map((_, index) => ({
          ...qualityInspectionList[index % qualityInspectionList.length],
          id: Mock.Random.guid(),
        })),
      )
    })
  },
})
