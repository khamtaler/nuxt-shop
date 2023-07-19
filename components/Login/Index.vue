<template>
  <Teleport to="body">
    <div id="login" v-if="open"></div>
  </Teleport>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/login'

const store = useCounterStore()
const open = computed(() => {
  return store.getLogin
})
</script>

<style scoped></style>
