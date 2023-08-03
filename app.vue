<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Account />
  <MobileMenu />
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
