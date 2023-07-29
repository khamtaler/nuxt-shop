<template>
  <div>
    <h3 class="shadow-blueheader my-5 py-3 text-4xl">
      {{ props.text }}
    </h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>

<style scoped></style>
