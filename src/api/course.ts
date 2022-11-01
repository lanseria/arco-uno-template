import axios from 'axios'
import type { HttpResponse } from './interceptor'

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

export interface CourseChapterRecord {
  id: string
  name: string
  order: number
  time: number
  children: CourseChapterRecord[]
}

export const queryCoursePage = (params: CourseParams) => {
  return axios.get<CoursePageRes>('/api/course/page', {
    params,
  })
}

export const queryCourseDetail = () => {
  return axios.get<HttpResponse<CourseRecord>>('/api/course/detail/1')
}

export const queryCourseChapter = () => {
  return axios.get<CourseChapterRecord[]>('/api/course/chapter/1')
}
