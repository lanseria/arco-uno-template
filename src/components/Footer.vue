<template>
  <nav class="text-xl mt-6 inline-flex gap-2 mx-auto my-5">
    <button class="icon-btn" @click="toggleDark()">
      <div class="dark:i-carbon-moon i-carbon-sun" />
    </button>

    <a
      class="icon-btn i-carbon-logo-github"
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
