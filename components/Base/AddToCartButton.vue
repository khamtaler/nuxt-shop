<template>
  <div>
    <button
      type="button"
      class="rounded-lg bg-darkblue px-5 py-2 text-white"
      @click="cartStore.addToCart(props.product)"
    >
      {{ props.text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { CartButton } from '@/types/components'
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()

const props = defineProps<CartButton>()
</script>

<style scoped></style>
