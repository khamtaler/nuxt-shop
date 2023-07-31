<template>
  <div
    class="absolute right-0 top-[100%] z-10 w-full max-w-[80%] rounded-b-md border-2 border-lightblue bg-white px-3 pb-5 md:right-10 md:max-w-[500px]"
    v-if="cartStore.getModal"
    @click.stop.prevent
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
        @click="cartStore.toggleModal"
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
