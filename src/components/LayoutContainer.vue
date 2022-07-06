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
})
</script>

<template>
  <div class="px-5 pb-5">
    <Breadcrumb :items="props.items" />
    <ACard class="general-card" :title="props.title">
      <slot />
    </ACard>
  </div>
</template>
