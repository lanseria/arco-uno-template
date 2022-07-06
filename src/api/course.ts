import axios from 'axios'

export interface CourseRecord {
  id: string
  name: string
  categoryName: string
  time: string
  cover: string
  status: string
}

export const queryCoursePage = () => {
  return axios.get<CourseRecord[]>('/api/course/page')
}
