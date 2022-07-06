<script type="ts" setup>
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
</script>

<template>
  <AConfigProvider
    :locale="zhCN"
  >
    <RouterView />
  </AConfigProvider>
</template>
