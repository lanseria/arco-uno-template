<script lang="ts" setup>
import PicturePanel from './components/PicturePanel.vue'
import VideoPanel from './components/VideoPanel.vue'
</script>

<script lang="ts">
export default {
  name: 'Material',
}
</script>

<template>
  <div class="px-5 pb-5">
    <Breadcrumb :items="['账号', '素材管理']" />
    <ACard class="general-card" title="素材管理">
      <ARow justify="space-between">
        <ACol :span="24">
          <ATabs :default-active-tab="1" type="rounded">
            <ATabPane key="1" title="图片">
              <PicturePanel />
            </ATabPane>
            <ATabPane key="2" title="视频">
              <VideoPanel />
            </ATabPane>
          </ATabs>
        </ACol>
      </ARow>
    </ACard>
  </div>
</template>
