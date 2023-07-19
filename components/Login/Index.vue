<template>
  <Teleport to="body"></Teleport>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/login'

const store = useCounterStore()
const open = computed(() => {
  return store.open
})
</script>

<style scoped></style>
