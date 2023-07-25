<template>
  <div
    class="absolute right-10 top-[100%] z-10 max-w-[500px] border-[1px] border-black bg-white p-5"
    v-if="cartStore.getModal"
  >
    <CartItemsList
      v-for="product in cartStore.getItems"
      v-if="cartStore.getItems.length"
    />
    <div v-else>Your cart is empty</div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>

<style scoped></style>
