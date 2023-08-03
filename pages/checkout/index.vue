<template>
  <div class="my-[50px]">
    <div class="text-center">
      <BaseHeader text="Welcome in checkout" class="inline-block" />
    </div>
    <div class="mx-auto my-10 max-w-7xl flex-row">
      <div
        class="mx-10 flex flex-col gap-10 md:flex-row"
        v-if="cartStore.getItems.length > 0"
      >
        <div class="flex-1">
          <CartItemsList />
          <div>
            <p class="text-right text-xl">
              Total:
              <span class="font-bold">
                ${{ roundNumber(cartStore.gettotal) }}
              </span>
            </p>
          </div>
        </div>
        <CheckoutForm class="flex-1" />
      </div>

      <div v-else class="text-center">
        <h4 class="flex-1 pt-10 text-xl">
          Your cart is empty... return to store to get your products
        </h4>
        <BaseButton link="/shop" text="Return to store" class="mt-10" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
useHead({
  title: 'Shopy - checkout',
})
</script>

<style scoped></style>
