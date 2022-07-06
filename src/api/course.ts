import axios from 'axios'
import qs from 'query-string'

export interface CourseRecord {
  id: string
  name: string
  categoryName: string
  time: string
  cover: string
  status: string
}
export interface CourseParams extends Partial<CourseRecord> {
  current: number
  pageSize: number
}

export interface CoursePageRes {
  list: CourseRecord[]
  total: number
}

export const queryCoursePage = (params: CourseParams) => {
  return axios.get<CoursePageRes>('/api/course/page', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj)
    },
  })
}
