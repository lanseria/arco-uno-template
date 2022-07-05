<script setup lang="ts">
const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push('/login')
}
</script>

<template>
  <div text-center m-20>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Arco Uno Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />
    <AInput
      v-model="name"
      class="w-[250px] h-[50px]"
      placeholder="请输入一些东西" allow-clear
      @keydown.enter="go"
    />
    <div>
      <AButton
        class="m-3" type="primary"
        :disabled="!name"
        @click="go"
      >
        <template #icon>
          <icon-plus />
        </template>
        登陆
      </AButton>
    </div>
    <Footer />
  </div>
</template>
