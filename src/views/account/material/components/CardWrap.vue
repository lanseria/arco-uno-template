<script lang="ts" setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  cover: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="card-wrap">
    <a-card v-if="loading" :bordered="false" hoverable>
      <slot name="skeleton" />
    </a-card>
    <a-card v-else :bordered="false" hoverable>
      <template #actions>
        <span class="icon-hover"> <IconDelete /> </span>
      </template>
      <template #cover>
        <div class="overflow-hidden relative">
          <img
            class="w-full"
            alt="dessert"
            :src="props.cover"
          >
          <a-checkbox class="absolute top-3 left-2" value="1" />
        </div>
      </template>
      <a-card-meta :title="props.title" :description="props.description">
        <template #avatar>
          <div
            :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }"
          >
            <a-avatar :size="24" :style="{ marginRight: '8px' }">
              A
            </a-avatar>
            <a-typography-text>Username</a-typography-text>
          </div>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<style scoped lang="less">
  .card-wrap {
    height: 100%;
    border: 1px solid var(--color-neutral-3);
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-4px);
      // box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    }

    :deep(.arco-card) {
      height: 100%;
      border-radius: 4px;

      .arco-card-body {
        height: 100%;

        .arco-space {
          width: 100%;
          height: 100%;

          .arco-space-item {
            height: 100%;

            &:last-child {
              flex: 1;
            }

            .arco-card-meta {
              display: flex;
              flex-flow: column;
              height: 100%;

              .arco-card-meta-content {
                flex: 1;

                .arco-card-meta-description {
                  margin-top: 8px;
                  color: rgb(var(--gray-6));
                  font-size: 12px;
                  line-height: 20px;
                }
              }

              .arco-card-meta-footer {
                margin-top: 0;
              }
            }
          }
        }
      }
    }

    :deep(.arco-card-meta-title) {
      display: flex;
      align-items: center;

      // To prevent the shaking
      line-height: 28px;
    }

    :deep(.arco-skeleton-line) {
      &:last-child {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
      }
    }
  }
</style>
