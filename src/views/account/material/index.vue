<script lang="ts" setup>
import PicturePanel from './components/PicturePanel.vue'
import VideoPanel from './components/VideoPanel.vue'
</script>

<script lang="ts">
export default {
  name: 'AccountMaterial',
}
</script>

<template>
  <LayoutContainer :items="['账号', '素材管理']" title="素材管理">
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
  </LayoutContainer>
</template>
