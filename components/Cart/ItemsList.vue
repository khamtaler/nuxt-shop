<template>
  <div class="flex flex-col">
    <CartSingleItem
      v-for="item in cartStore.getItems"
      :img="item.image"
      :title="item.title"
      :count="item.count"
      :id="item.id"
      :price="item.price"
    />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>

<style scoped></style>
