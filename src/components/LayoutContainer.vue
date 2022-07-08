<script lang="ts" setup>
import type { PropType } from 'vue'
const props = defineProps({
  items: {
    type: Array as PropType<string[]>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  showBack: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()
</script>

<template>
  <div class="px-5 pb-5">
    <Breadcrumb :items="props.items" />
    <ACard class="general-card">
      <template #title>
        <ASpace>
          <a-button v-if="showBack" type="text" shape="circle" @click="() => router.go(-1)">
            <icon-left />
          </a-button>
          {{ props.title }}
        </ASpace>
      </template>
      <slot />
    </ACard>
  </div>
</template>
