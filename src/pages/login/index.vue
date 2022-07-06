<script lang="ts" setup>
import LoginBanner from './components/LoginBanner.vue'
import LoginForm from './components/LoginForm.vue'
</script>

<template>
  <div class="flex h-100vh">
    <div class="logo fixed top-8 left-8 z-1 inline-flex items-center">
      <img src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image" alt="logo">
      <div class="logo-text mr-1 ml-1 text-size-20px text-white">
        Arco Design Uno
      </div>
    </div>
    <LoginBanner />
    <div class="content relative flex flex-auto items-center justify-center pb-10">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer absolute right-0 bottom-0 w-full text-center">
        <Footer />
      </div>
    </div>
  </div>
</template>
