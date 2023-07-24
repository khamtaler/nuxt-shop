<template>
  <div
    class="absolute right-0 top-[100%] z-10 bg-red-500 p-5"
    v-if="store.getModal"
  >
    <p>Cart</p>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const store = useCartStore()
</script>

<style scoped></style>
