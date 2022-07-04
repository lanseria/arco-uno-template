<script setup lang="ts">
const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
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
    <a-input
      v-model="name"
      class="px-4 py-2 w-[250px]" placeholder="Please enter something" allow-clear
      @keydown.enter="go"
    />
    <div>
      <a-button
        class="m-3" type="primary"
        :disabled="!name"
        @click="go"
      >
        Go
      </a-button>
    </div>
  </div>
</template>
