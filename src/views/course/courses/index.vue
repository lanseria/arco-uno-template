<script lang="ts" setup>
import type { SelectOptionData, TableRowSelection } from '@arco-design/web-vue'
import type { Pagination } from '~/types/global'
import type { CourseParams, CourseRecord } from '~/api/course'
import { queryCoursePage } from '~/api/course'

const generateFormModel = () => {
  return {
    name: '',
    category: '',
    status: '',
  }
}
const formModel = ref(generateFormModel())
const courseStatusOptions = computed<SelectOptionData[]>(() => [
  {
    label: '未上架',
    value: '1',
  },
  {
    label: '已上架',
    value: '2',
  },
  {
    label: '已下架',
    value: '3',
  },
])
const router = useRouter()
const { loading, setLoading } = useLoading(true)
const renderData = ref<CourseRecord[]>([])

const basePagination: Pagination = {
  current: 1,
  pageSize: 20,
}
const pagination = reactive({
  ...basePagination,
})
const rowSelection = reactive<TableRowSelection>({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false,
})

const onPageChange = (current: number) => {
  fetchData({ ...basePagination, current })
}

const fetchData = async (
  params: CourseParams = { current: 1, pageSize: 20 }) => {
  setLoading(true)
  try {
    const { data } = await queryCoursePage(params)
    renderData.value = data.list
    pagination.current = params.current
    pagination.total = data.total
  }
  catch (err) {
  //
  }
  finally {
    setLoading(false)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<script lang="ts">
export default {
  name: 'CoursesPage',
}
</script>

<template>
  <LayoutContainer :items="['课程', '课程管理']" title="课程管理">
    <ARow>
      <ACol :flex="1">
        <AForm
          :model="formModel"
          :label-col-props="{ span: 6 }"
          :wrapper-col-props="{ span: 18 }"
          label-align="left"
        >
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item
                field="name"
                label="课程名称"
              >
                <a-input
                  v-model="formModel.name"
                  placeholder="请输入课程名称"
                />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item
                field="name"
                label="课程分类"
              >
                <a-select
                  v-model="formModel.category"
                  :options="courseStatusOptions"
                  placeholder="请选择课程分类"
                />
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item
                field="name"
                label="课程状态"
              >
                <a-select
                  v-model="formModel.status"
                  :options="courseStatusOptions"
                  placeholder="请选择课程状态"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </AForm>
      </ACol>
      <ADivider class="h-10" direction="vertical" />
      <ACol flex="180px" class="text-right">
        <a-space>
          <a-button type="primary">
            <template #icon>
              <icon-search />
            </template>
            查询
          </a-button>
          <a-button>
            <template #icon>
              <icon-refresh />
            </template>
            重置
          </a-button>
        </a-space>
      </ACol>
    </ARow>

    <a-divider class="mt-0" />
    <ARow class="mb-4">
      <ACol :span="16">
        <ASpace>
          <AButton
            type="primary" @click="() => router.push({
              path: 'new',
            })"
          >
            <template #icon>
              <IconPlus />
            </template>
            新建课程
          </AButton>
          <AUpload action="/">
            <template #upload-button>
              <AButton>批量上传</AButton>
            </template>
          </AUpload>
        </ASpace>
      </ACol>
      <ACol :span="8" class="text-right">
        <AButton>
          <template #icon>
            <icon-download />
          </template>
          下载导出
        </AButton>
      </ACol>
    </ARow>

    <ATable
      row-key="id"
      :loading="loading"
      :pagination="pagination"
      :data="renderData"
      :bordered="false"
      :row-selection="rowSelection"
      @page-change="onPageChange"
    >
      <template #columns>
        <a-table-column
          title="课程名称"
        >
          <template #cell="{ record }">
            <a-list-item-meta
              description=""
            >
              <template #title>
                <a-link
                  @click="() => router.push({
                    path: 'detail/1',
                  })"
                >
                  {{ record.name }}
                </a-link>
              </template>
              <template #avatar>
                <a-image
                  width="80"
                  height="50" :src="record.cover"
                />
              </template>
            </a-list-item-meta>
          </template>
        </a-table-column>
        <a-table-column
          title="课程分类"
          data-index="categoryName"
        />
        <a-table-column
          title="操作"
          data-index="operations"
          fixed="right"
          :width="220"
        >
          <template #cell>
            <a-button type="text" size="small">
              排序
            </a-button>
            <a-button type="text" size="small">
              编辑
            </a-button>
            <a-button type="text" size="small" status="danger">
              删除
            </a-button>
          </template>
        </a-table-column>
      </template>
    </ATable>
  </LayoutContainer>
</template>
