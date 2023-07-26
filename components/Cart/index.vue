<template>
  <div
    class="absolute right-10 top-[100%] z-10 max-w-[500px] border-[1px] border-black bg-white p-5"
    v-if="cartStore.getModal"
  >
    <div v-if="cartStore.getItems.length">
      <CartItemsList />
      <div>cart total: ${{ cartStore.gettotal }}</div>
    </div>

    <div v-else>Your cart is empty</div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>

<style scoped></style>
