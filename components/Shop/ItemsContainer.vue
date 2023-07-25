<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div
      v-else
      class="mx-auto my-10 grid max-w-6xl auto-rows-auto grid-cols-3 gap-5"
    >
      <ShopSingleItem
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :imageUrl1="product.imageUrl1"
        :title="product.title"
        :price="product.price"
        :rating="product.rating"
        :category="product.category"
        :description="product.description"
        :desc="product.category"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getNumberOfProducts } from '@/composables/Product'
const props = defineProps<{ numberOfProducts?: number | null }>()
const { pending, products } = await getNumberOfProducts(
  props.numberOfProducts ? props.numberOfProducts : '',
)
</script>
composables/Product
