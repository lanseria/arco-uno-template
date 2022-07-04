<script lang="ts" setup>
import bannerImage from '~/assets/images/login-banner.png'
const carouselItem = [
  {
    slogan: '开箱即用的高质量模板',
    subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
    image: bannerImage,
  },
  {
    slogan: '内置了常见问题的解决方案',
    subSlogan: '国际化，路由配置，状态管理应有尽有',
    image: bannerImage,
  },
  {
    slogan: '接入可视化增强工具AUX',
    subSlogan: '实现灵活的区块式开发',
    image: bannerImage,
  },
]
</script>

<template>
  <div
    class="banner flex items-center justify-center w-137 lt-lg:max-w-1/4" style="
      background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);"
  >
    <div class="banner-inner flex-1 h-full">
      <ACarousel class="carousel h-full" animation-name="fade">
        <ACarouselItem v-for="item in carouselItem" :key="item.slogan">
          <div class="carousel-item flex flex-col items-center justify-center h-full">
            <div class="carousel-title font-medium text-size-[20px] leading-[28px] text-white">
              {{ item.slogan }}
            </div>
            <div class="carousel-sub-title mt-2 text-size-[14px] leading-[22px] text-white">
              {{ item.subSlogan }}
            </div>
            <img class="carousel-image w-80 mt-8" :src="item.image" :alt="item.slogan">
          </div>
        </ACarouselItem>
      </ACarousel>
    </div>
  </div>
</template>
