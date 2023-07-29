<template>
  <div
    class="absolute right-10 top-[100%] z-10 max-w-[500px] rounded-b-md border-2 border-lightblue bg-white px-3 pb-5"
    v-if="cartStore.getModal"
  >
    <div v-if="cartStore.getItems.length">
      <CartItemsList />
      <div class="mt-3 text-right">
        cart total: $
        <span class="text-md">{{ roundNumber(cartStore.gettotal) }}</span>
      </div>
      <NuxtLink
        to="/checkout"
        class="float-right mt-3 block rounded-md bg-darkblue px-4 py-2 text-white"
      >
        Checkout
      </NuxtLink>
    </div>

    <div v-else>Your cart is empty</div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { roundNumber } from '@/utils/numbers'
const cartStore = useCartStore()
</script>

<style scoped></style>
