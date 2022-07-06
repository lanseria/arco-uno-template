<script lang="ts" setup></script>

<script lang="ts">
export default {
  name: 'AccountCenter',
}
</script>

<template>
  <LayoutContainer :items="['账号', '账号详情']" title="账号详情">
    <a-list>
      <template #header>
        个人信息
      </template>
      <a-list-item>
        <ASpace class="w-full justify-between">
          <a-list-item-meta
            title="手机号"
            description="15544334433"
          />
          <AButton type="text">
            修改
          </AButton>
        </ASpace>
      </a-list-item>
      <a-list-item>
        <ASpace class="w-full justify-between">
          <a-list-item-meta
            title="密码"
            description="**********"
          />
          <AButton type="text">
            修改密码
          </AButton>
        </ASpace>
      </a-list-item>
      <a-list-item>
        <ASpace class="w-full justify-between">
          <a-list-item-meta
            title="平台版本"
            description="标准试用版"
          />
          <AButton type="text">
            续费
          </AButton>
        </ASpace>
      </a-list-item>
    </a-list>
  </LayoutContainer>
</template>
