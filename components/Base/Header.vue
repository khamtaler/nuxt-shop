<template>
  <div class="block text-center">
    <h3
      class="my-5 inline-block py-3 text-center text-4xl uppercase shadow-blueheader"
    >
      {{ props.text }}
    </h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>

<style scoped></style>
