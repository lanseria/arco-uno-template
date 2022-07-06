<script lang="ts" setup>
import type { CategoryTreeRecord } from '~/api/category'
import { queryCategoryTree } from '~/api/category'

const { loading, setLoading } = useLoading(true)
const renderData = ref<CategoryTreeRecord[]>([])
const fetchData = async () => {
  setLoading(true)
  try {
    const { data } = await queryCategoryTree()
    renderData.value = data
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
  name: 'AccountCategory',
}
</script>

<template>
  <LayoutContainer :items="['账号', '分类管理']" title="分类管理">
    <ARow class="mb-4">
      <ACol :span="16">
        <ASpace>
          <AButton type="primary">
            <template #icon>
              <IconPlus />
            </template>
            新建一级分类
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
    <ATable row-key="id" :loading="loading" :data="renderData" :bordered="false" :pagination="false">
      <template #columns>
        <a-table-column
          title="分类名称"
          data-index="categoryName"
        />
        <a-table-column
          title="操作"
          data-index="operations"
          fixed="right"
          :width="250"
        >
          <template #cell>
            <a-button type="text" size="small">
              新建分类
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
