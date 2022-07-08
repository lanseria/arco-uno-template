<script lang="ts" setup>
interface BaseInfoModel {
  name: string
  category: string
  cover: string
}
const formData = ref<BaseInfoModel>({
  name: '',
  category: '',
  cover: '',
})
</script>

<script lang="ts">
export default {
  name: 'CoursesEdit',
}
</script>

<template>
  <LayoutContainer :items="['课程', '新建课程']" title="新建课程" :show-back="true">
    <AForm
      ref="formRef"
      :model="formData"
      class="form"
      :label-col-props="{ span: 6 }"
      :wrapper-col-props="{ span: 18 }"
    >
      <AFormItem
        class="w-100"
        field="name" label="课程名称" :rules="[
          {
            required: true,
            message: '请输入课程名称',
          },
        ]"
      >
        <AInput v-model="formData.name" placeholder="请输入课程名称" />
      </AFormItem>
      <AFormItem
        class="w-100"
        field="name" label="课程分类" :rules="[
          {
            required: true,
            message: '请输入课程分类',
          },
        ]"
      >
        <AInput v-model="formData.name" placeholder="请输入课程分类" />
      </AFormItem>
      <a-form-item
        class="w-100"
      >
        <a-button type="primary">
          保存
        </a-button>
      </a-form-item>
    </AForm>
  </LayoutContainer>
</template>
