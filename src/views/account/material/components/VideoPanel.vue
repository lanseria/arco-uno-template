<script lang="ts" setup>
import CardWrap from './CardWrap.vue'
import type { ServiceRecord } from '~/api/list'
import { queryInspectionList } from '~/api/list'
import { useRequest } from '~/composables'

const defaultValue: ServiceRecord[] = new Array(3).fill({})
const { loading, response: renderData } = useRequest<ServiceRecord[]>(
  queryInspectionList,
  defaultValue,
)
</script>

<template>
  <ARow class="mb-4">
    <ACol :span="16" class="flex items-center h-8">
      <a-checkbox value="1">
        全选
      </a-checkbox>
    </ACol>
    <ACol :span="8" class="text-right">
      <AButton status="danger">
        <template #icon>
          <icon-delete />
        </template>
        批量删除
      </AButton>
    </ACol>
  </ARow>

  <ARow :gutter="24">
    <ACol
      :xs="12"
      :sm="12"
      :md="12"
      :lg="6"
      :xl="6"
      :xxl="6"
    >
      <div class="card-wrap empty-wrap">
        <a-card :bordered="false" hoverable>
          <a-result :status="null" title="点击上传视频">
            <template #icon>
              <icon-plus style="font-size: 20px" />
            </template>
          </a-result>
        </a-card>
      </div>
    </ACol>
    <a-col
      v-for="item in renderData"
      :key="item.id"
      class="list-col"
      :xs="12"
      :sm="12"
      :md="12"
      :lg="6"
      :xl="6"
      :xxl="6"
    >
      <CardWrap
        :loading="loading"
        :title="item.title"
        :description="item.description"
        :cover="item.cover"
        open-txt="质检"
        close-txt="删除"
        :show-tag="false"
      >
        <a-descriptions
          style="margin-top: 16px"
          :data="item.data"
          layout="inline-horizontal"
          :column="2"
        />
        <template #skeleton>
          <a-skeleton :animation="true">
            <a-skeleton-line
              :widths="['50%', '50%', '100%', '40%']"
              :rows="4"
            />
            <a-skeleton-line :widths="['40%']" :rows="1" />
          </a-skeleton>
        </template>
      </CardWrap>
    </a-col>
  </ARow>
</template>

<style scoped lang="less">
  .card-wrap {
    height: 100%;
    border: 1px solid var(--color-neutral-3);
    transition: all 0.3s;

    &:hover {
      transform: translateY(-4px);
    }

    :deep(.arco-card-meta-description) {
      color: rgb(var(--gray-6));

      .arco-descriptions-item-label-inline {
        color: rgb(var(--gray-6));
        font-weight: normal;
        font-size: 12px;
      }

      .arco-descriptions-item-value-inline {
        color: rgb(var(--gray-8));
      }
    }
  }

  .empty-wrap {
    height: 200px;
    border-radius: 4px;

    :deep(.arco-card) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      border-radius: 4px;

      .arco-result-title {
        color: rgb(var(--gray-6));
      }
    }
  }
</style>
