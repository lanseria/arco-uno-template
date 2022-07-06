import Mock from 'mockjs'
import MockData from './mock.json'
import setupMock, { successResponseWrap } from '~/utils/setup-mock'

// const { Random } = Mock

// const data = Mock.mock({
//   'list|10': [
//     {
//       'id|8': /[0-9]/,
//       'pid|8': /[A-Z][a-z][-][0-9]/,
//       'categoryName|4-8': /[A-Z]/,
//       'createdTime': Random.datetime(),
//       'children|0-3': [
//         {
//           'id|8': /[0-9]/,
//           'pid|8': /[A-Z][a-z][-][0-9]/,
//           'categoryName|4-8': /[A-Z]/,
//           'createdTime': Random.datetime(),
//         },
//       ],
//     },
//   ],
// })

setupMock({
  setup() {
    Mock.mock(/\/api\/category\/tree/, () => {
      return successResponseWrap(MockData)
    })
  },
})
