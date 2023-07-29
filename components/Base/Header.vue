<template>
  <div>
    <h3 class="my-5 py-3 text-4xl uppercase shadow-blueheader">
      {{ props.text }}
    </h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>

<style scoped></style>
