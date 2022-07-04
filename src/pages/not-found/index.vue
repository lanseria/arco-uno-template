<script lang="ts" setup>
const router = useRouter()
const back = () => {
  router.push('/')
}
</script>

<template>
  <div class="text-center">
    <AResult status="404" subtitle="没有找到" />
    <div>
      <AButton key="back" type="primary" @click="back()">
        返回
      </AButton>
    </div>
  </div>
</template>
