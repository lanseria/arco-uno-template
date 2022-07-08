<script lang="ts" setup>
import type { CourseChapterRecord, CourseRecord } from '~/api/course'
import { queryCourseChapter, queryCourseDetail } from '~/api/course'
const defaultValue: CourseRecord = {
  id: '1',
  name: '',
  categoryName: '',
  time: '',
  cover: '',
  status: '1',
}
const { loading, response: renderData } = useRequest<CourseRecord>(
  queryCourseDetail,
  defaultValue,
)
const { loading: treeLoading, setLoading } = useLoading(true)
const renderTree = ref<CourseChapterRecord[]>([])
const fetchData = async () => {
  setLoading(true)
  try {
    const { data } = await queryCourseChapter()
    renderTree.value = data
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
  name: 'CoursesDetail',
}
</script>

<template>
  <LayoutContainer :items="['课程', '课程详情']" title="课程详情" :show-back="true">
    <a-spin :loading="loading" class="w-full">
      <ACard class="mb-5">
        <ARow>
          <ACol :span="12" class="flex items-start">
            <a-image
              width="180"
              height="100"
              :src="renderData.cover"
            />
            <ASpace class="ml-4" direction="vertical">
              <a-typography-title class="mt-0!" :heading="6">
                {{ renderData.name }}
              </a-typography-title>
              <a-typography-text>
                分类名称：{{ renderData.categoryName }}
              </a-typography-text>
            </ASpace>
          </ACol>
          <ACol :span="12" class="text-right">
            <ASpace>
              <a-button type="text">
                <template #icon>
                  <icon-edit />
                </template>
                <!-- Use the default slot to avoid extra spaces -->
                <template #default>
                  编辑
                </template>
              </a-button>
            </ASpace>
          </ACol>
        </ARow>
      </ACard>
    </a-spin>
    <a-tabs type="card-gutter">
      <a-tab-pane key="1" title="课时管理" class="px-4 pb-4">
        <ARow class="mb-4">
          <ACol :span="16">
            <ASpace>
              <AButton type="primary">
                新建章节
              </AButton>
              <AButton type="secondary">
                新建课时
              </AButton>
            </ASpace>
          </ACol>
        </ARow>
        <ATable row-key="id" :loading="treeLoading" :data="renderTree" :bordered="false" :pagination="false">
          <template #columns>
            <a-table-column
              title="分类名称"
              data-index="name"
            />
            <a-table-column
              title="操作"
              data-index="operations"
              fixed="right"
              :width="250"
            >
              <template #cell>
                <a-button type="text" size="small">
                  新建课时
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
      </a-tab-pane>
    </a-tabs>
  </LayoutContainer>
</template>
