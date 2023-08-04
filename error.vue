<template>
  <div class="flex min-h-[500px] items-center justify-center">
    <div class="text-center">
      <h1 class="mb-5 text-5xl">{{ error.statusCode }}</h1>
      <h2 class="mb-5 text-4xl">Opsss</h2>
      <p class="mb-5 text-xl">{{ error.message }}</p>
      <button class="bg-sBlack px-5 py-3 text-white" type="button">
        Return Home...
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['error'])
</script>

<style scoped></style>
