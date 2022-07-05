import axios from 'axios'

export interface CategoryTreeRecord {
  id: string
  pid: string
  categoryName: string
  children: CategoryTreeRecord[]
}

export const queryCategoryTree = () => {
  return axios.get<CategoryTreeRecord[]>('/api/category/tree')
}
